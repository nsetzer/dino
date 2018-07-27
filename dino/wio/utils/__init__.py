import logging
import traceback
from base64 import b64decode
from base64 import b64encode
from datetime import datetime, timedelta
from typing import Union

from dino.utils.activity_helper import ActivityBuilder
from dino.validation.duration import DurationValidator
from dino.validation.generic import GenericValidator
from dino.wio import environ

logger = logging.getLogger(__name__)

# TODO: need to abstract away helper methods from environ definitions to we can skip these duplications


def b64d(s: str) -> str:
    if s is None:
        return ''

    s = s.strip()
    if len(s) == 0:
        return ''

    try:
        return str(b64decode(bytes(s, 'utf-8')), 'utf-8')
    except Exception as e:
        logger.error('could not b64decode because: %s, value was: \n%s' % (str(e), str(s)))
    return ''


def b64e(s: str) -> str:
    if s is None:
        return ''

    s = s.strip()
    if len(s) == 0:
        return ''

    try:
        return str(b64encode(bytes(s, 'utf-8')), 'utf-8')
    except Exception as e:
        logger.error('could not b64encode because: %s, value was: \n%s' % (str(e), str(s)))
    return ''


def is_base64(s):
    if s is None or len(s.strip()) == 0:
        return False
    try:
        str(b64decode(bytes(s, 'utf-8')), 'utf-8')
    except Exception as e:
        logger.warning('invalid message content, could not decode base64: %s' % str(e))
        logger.exception(traceback.format_exc())
        return False
    return True


def is_super_user(user_id: str) -> bool:
    return environ.env.db.is_super_user(user_id)


def is_owner(room_id: str, user_id: str) -> bool:
    return environ.env.db.is_owner(room_id, user_id)


def is_owner_channel(channel_id: str, user_id: str) -> bool:
    return environ.env.db.is_owner_channel(channel_id, user_id)


def is_global_moderator(user_id: str) -> bool:
    return environ.env.db.is_global_moderator(user_id)


def is_moderator(room_id: str, user_id: str) -> bool:
    return environ.env.db.is_moderator(room_id, user_id)


def is_admin(channel_id: str, user_id: str) -> bool:
    return environ.env.db.is_admin(channel_id, user_id)


def is_banned_globally(user_id: str) -> (bool, Union[str, None]):
    user_is_banned, timestamp = environ.env.db.is_banned_globally(user_id)
    if not user_is_banned or timestamp is None or timestamp == '':
        return False, None

    now = datetime.utcnow()
    end = datetime.fromtimestamp(float(timestamp))
    return True, (end - now).seconds


def activity_for_login(user_id: str, user_name: str) -> dict:
    return ActivityBuilder.enrich({
        'actor': {
            'id': user_id,
            'displayName': b64e(user_name),
        },
        'verb': 'login'
    })


def datetime_to_timestamp(some_date: datetime) -> str:
    return str(int(some_date.timestamp()))


def ban_duration_to_timestamp(ban_duration: str) -> str:
    return datetime_to_timestamp(ban_duration_to_datetime(ban_duration))


def ban_duration_to_datetime(ban_duration: str) -> datetime:
    DurationValidator(ban_duration)

    days = 0
    hours = 0
    seconds = 0
    duration_unit = ban_duration[-1]
    ban_duration = ban_duration[:-1]

    if duration_unit == 'd' and GenericValidator.is_digit(ban_duration):
        days = int(ban_duration)
    elif duration_unit == 'h' and GenericValidator.is_digit(ban_duration):
        hours = int(ban_duration)
    elif duration_unit == 'm' and GenericValidator.is_digit(ban_duration):
        seconds = int(ban_duration) * 60
    elif duration_unit == 's' and GenericValidator.is_digit(ban_duration):
        seconds = int(ban_duration)

    now = datetime.utcnow()
    ban_time = timedelta(days=days, hours=hours, seconds=seconds)
    end_date = now + ban_time

    return end_date


def activity_for_already_banned(seconds_left: str, reason: str, scope: str='global', target_id: str=None, target_name: str=None) -> dict:
    activity_json = ActivityBuilder.enrich({
        'verb': 'ban',
        'object': {
            'content': '',
            'summary': seconds_left
        },
        'target': {
            'objectType': scope
        }
    })

    if reason is not None and len(reason.strip()) > 0:
        activity_json['object']['content'] = b64e(reason)

    if target_id is not None and len(target_id.strip()) > 0:
        activity_json['target']['id'] = target_id
        activity_json['target']['displayName'] = b64e(target_name)

    return activity_json
Search.setIndex({envversion:50,filenames:["dino","dino.admin","dino.admin.forms","dino.admin.orm","dino.auth","dino.cache","dino.db","dino.db.manager","dino.db.rdbms","dino.endpoint","dino.storage","dino.utils","dino.validation","index","modules"],objects:{"":{dino:[0,0,0,"-"]},"dino.admin":{orm:[3,0,0,"-"]},"dino.api":{on_ban:[0,1,1,""],on_connect:[0,1,1,""],on_create:[0,1,1,""],on_delete:[0,1,1,""],on_disconnect:[0,1,1,""],on_get_acl:[0,1,1,""],on_history:[0,1,1,""],on_join:[0,1,1,""],on_kick:[0,1,1,""],on_leave:[0,1,1,""],on_list_channels:[0,1,1,""],on_list_rooms:[0,1,1,""],on_login:[0,1,1,""],on_message:[0,1,1,""],on_set_acl:[0,1,1,""],on_status:[0,1,1,""],on_users_in_room:[0,1,1,""]},"dino.auth":{redis:[4,0,0,"-"],simple:[4,0,0,"-"]},"dino.auth.redis":{AuthRedis:[4,2,1,""]},"dino.auth.redis.AuthRedis":{authenticate_and_populate_session:[4,3,1,""]},"dino.auth.simple":{AllowAllAuth:[4,2,1,""],DenyAllAuth:[4,2,1,""]},"dino.auth.simple.AllowAllAuth":{authenticate_and_populate_session:[4,3,1,""]},"dino.auth.simple.DenyAllAuth":{authenticate_and_populate_session:[4,3,1,""]},"dino.cache":{miss:[5,0,0,"-"],redis:[5,0,0,"-"]},"dino.cache.miss":{CacheAllMiss:[5,2,1,""]},"dino.cache.miss.CacheAllMiss":{always_returns_none:[5,3,1,""]},"dino.cache.redis":{CacheRedis:[5,2,1,""],MemoryCache:[5,2,1,""]},"dino.cache.redis.CacheRedis":{get_channel_ban_timestamp:[5,3,1,""],get_channel_exists:[5,3,1,""],get_channel_for_room:[5,3,1,""],get_channel_name:[5,3,1,""],get_global_ban_timestamp:[5,3,1,""],get_room_ban_timestamp:[5,3,1,""],get_room_exists:[5,3,1,""],get_room_id_for_name:[5,3,1,""],get_room_name:[5,3,1,""],get_user_name:[5,3,1,""],get_user_status:[5,3,1,""],redis:[5,4,1,""],set_channel_ban_timestamp:[5,3,1,""],set_channel_exists:[5,3,1,""],set_channel_for_room:[5,3,1,""],set_global_ban_timestamp:[5,3,1,""],set_room_ban_timestamp:[5,3,1,""],set_room_exists:[5,3,1,""],set_room_id_for_name:[5,3,1,""],set_user_invisible:[5,3,1,""],set_user_name:[5,3,1,""],set_user_offline:[5,3,1,""],set_user_online:[5,3,1,""],user_check_status:[5,3,1,""],user_is_invisible:[5,3,1,""],user_is_offline:[5,3,1,""],user_is_online:[5,3,1,""]},"dino.cache.redis.MemoryCache":{flushall:[5,3,1,""],get:[5,3,1,""],set:[5,3,1,""]},"dino.config":{ApiActions:[0,2,1,""],ApiTargets:[0,2,1,""],ConfigKeys:[0,2,1,""],RedisKeys:[0,2,1,""],RoleKeys:[0,2,1,""],SessionKeys:[0,2,1,""],UserKeys:[0,2,1,""]},"dino.config.ApiActions":{BAN:[0,4,1,""],CROSSROOM:[0,4,1,""],HISTORY:[0,4,1,""],JOIN:[0,4,1,""],KICK:[0,4,1,""],LIST:[0,4,1,""],MESSAGE:[0,4,1,""],SETACL:[0,4,1,""],all_api_actions:[0,4,1,""]},"dino.config.ApiTargets":{CHANNEL:[0,4,1,""],ROOM:[0,4,1,""]},"dino.config.ConfigKeys":{ACL:[0,4,1,""],AUTH_SERVICE:[0,4,1,""],CACHE_SERVICE:[0,4,1,""],DATABASE:[0,4,1,""],DATE_FORMAT:[0,4,1,""],DB:[0,4,1,""],DEBUG:[0,4,1,""],DEFAULT_DATE_FORMAT:[0,4,1,""],DEFAULT_HISTORY_LIMIT:[0,4,1,""],DEFAULT_HISTORY_STRATEGY:[0,4,1,""],DEFAULT_LOG_FORMAT:[0,4,1,""],DEFAULT_LOG_LEVEL:[0,4,1,""],DEFAULT_REDIS_HOST:[0,4,1,""],DRIVER:[0,4,1,""],ENVIRONMENT:[0,4,1,""],HISTORY:[0,4,1,""],HISTORY_TYPE_TOP:[0,4,1,""],HISTORY_TYPE_UNREAD:[0,4,1,""],HOST:[0,4,1,""],LIMIT:[0,4,1,""],LOGGER:[0,4,1,""],LOG_FORMAT:[0,4,1,""],LOG_LEVEL:[0,4,1,""],PASSWORD:[0,4,1,""],PORT:[0,4,1,""],QUEUE:[0,4,1,""],REDIS:[0,4,1,""],REPLICATION:[0,4,1,""],SESSION:[0,4,1,""],STORAGE:[0,4,1,""],STRATEGY:[0,4,1,""],TESTING:[0,4,1,""],TYPE:[0,4,1,""],USER:[0,4,1,""],VERSION:[0,4,1,""]},"dino.config.RedisKeys":{RKEY_ACL_VALIDATION:[0,4,1,""],RKEY_AUTH:[0,4,1,""],RKEY_BANNED_USERS_CHANNEL:[0,4,1,""],RKEY_BANNED_USERS_GLOBAL:[0,4,1,""],RKEY_BANNED_USERS_ROOM:[0,4,1,""],RKEY_CHANNELS:[0,4,1,""],RKEY_CHANNEL_ACL:[0,4,1,""],RKEY_CHANNEL_FOR_ROOMS:[0,4,1,""],RKEY_CHANNEL_ROLES:[0,4,1,""],RKEY_GLOBAL_ROLES:[0,4,1,""],RKEY_LAST_READ:[0,4,1,""],RKEY_MULTI_CAST:[0,4,1,""],RKEY_ONLINE_BITMAP:[0,4,1,""],RKEY_ONLINE_SET:[0,4,1,""],RKEY_PRIVATE_CHANNEL_FOR_PREFIX:[0,4,1,""],RKEY_PRIVATE_ROOMS_IN_CHANNEL:[0,4,1,""],RKEY_ROOMS:[0,4,1,""],RKEY_ROOMS_FOR_USER:[0,4,1,""],RKEY_ROOMS_PRIVATE:[0,4,1,""],RKEY_ROOM_ACL:[0,4,1,""],RKEY_ROOM_HISTORY:[0,4,1,""],RKEY_ROOM_ID_FOR_NAME:[0,4,1,""],RKEY_ROOM_NAME:[0,4,1,""],RKEY_ROOM_OWNERS:[0,4,1,""],RKEY_ROOM_ROLES:[0,4,1,""],RKEY_SID_TO_USER_ID:[0,4,1,""],RKEY_USERS_IN_ROOM:[0,4,1,""],RKEY_USER_NAMES:[0,4,1,""],RKEY_USER_STATUS:[0,4,1,""],acl_validations:[0,5,1,""],auth_key:[0,5,1,""],banned_users:[0,5,1,""],banned_users_channel:[0,5,1,""],channel_acl:[0,5,1,""],channel_for_rooms:[0,5,1,""],channel_roles:[0,5,1,""],channels:[0,5,1,""],global_roles:[0,5,1,""],last_read:[0,5,1,""],online_bitmap:[0,5,1,""],online_set:[0,5,1,""],private_channel_for_prefix:[0,5,1,""],private_rooms:[0,5,1,""],private_rooms_in_channel:[0,5,1,""],room_acl:[0,5,1,""],room_history:[0,5,1,""],room_id_for_name:[0,5,1,""],room_name_for_id:[0,5,1,""],room_owners:[0,5,1,""],room_roles:[0,5,1,""],rooms:[0,5,1,""],rooms_for_user:[0,5,1,""],sid_for_user_id:[0,5,1,""],user_names:[0,5,1,""],user_status:[0,5,1,""],users_in_room:[0,5,1,""],users_multi_cast:[0,5,1,""]},"dino.config.RoleKeys":{ADMIN:[0,4,1,""],MODERATOR:[0,4,1,""],OWNER:[0,4,1,""],SUPER_USER:[0,4,1,""]},"dino.config.SessionKeys":{age:[0,4,1,""],city:[0,4,1,""],country:[0,4,1,""],crossgroup:[0,4,1,""],fake_checked:[0,4,1,""],gender:[0,4,1,""],group:[0,4,1,""],has_webcam:[0,4,1,""],image:[0,4,1,""],membership:[0,4,1,""],requires_session_keys:[0,4,1,""],token:[0,4,1,""],user_id:[0,4,1,""],user_name:[0,4,1,""]},"dino.config.UserKeys":{STATUS_AVAILABLE:[0,4,1,""],STATUS_CHAT:[0,4,1,""],STATUS_INVISIBLE:[0,4,1,""],STATUS_UNAVAILABLE:[0,4,1,""],STATUS_UNKNOWN:[0,4,1,""]},"dino.db":{manager:[7,0,0,"-"],rdbms:[8,0,0,"-"],redis:[6,0,0,"-"]},"dino.db.manager":{acls:[7,0,0,"-"],base:[7,0,0,"-"],channels:[7,0,0,"-"],rooms:[7,0,0,"-"],users:[7,0,0,"-"]},"dino.db.manager.acls":{AclManager:[7,2,1,""]},"dino.db.manager.acls.AclManager":{add_acl_channel:[7,3,1,""],add_acl_room:[7,3,1,""],delete_acl_channel:[7,3,1,""],delete_acl_room:[7,3,1,""],get_acls_channel:[7,3,1,""],get_acls_room:[7,3,1,""],update_channel_acl:[7,3,1,""],update_room_acl:[7,3,1,""]},"dino.db.manager.base":{BaseManager:[7,2,1,""]},"dino.db.manager.channels":{ChannelManager:[7,2,1,""]},"dino.db.manager.channels.ChannelManager":{create_channel:[7,3,1,""],get_admins:[7,3,1,""],get_channels:[7,3,1,""],get_owners:[7,3,1,""],name_for_uuid:[7,3,1,""],rename:[7,3,1,""]},"dino.db.manager.rooms":{RoomManager:[7,2,1,""]},"dino.db.manager.rooms.RoomManager":{create_room:[7,3,1,""],get_moderators:[7,3,1,""],get_owners:[7,3,1,""],get_rooms:[7,3,1,""],name_for_uuid:[7,3,1,""],remove_room:[7,3,1,""],rename:[7,3,1,""]},"dino.db.manager.users":{UserManager:[7,2,1,""]},"dino.db.manager.users.UserManager":{add_channel_admin:[7,3,1,""],add_channel_owner:[7,3,1,""],add_room_moderator:[7,3,1,""],add_room_owner:[7,3,1,""],ban_user:[7,3,1,""],create_admin_user:[7,3,1,""],get_banned_users:[7,3,1,""],get_super_users:[7,3,1,""],get_user:[7,3,1,""],get_users_for_room:[7,3,1,""],kick_user:[7,3,1,""],remove_channel_admin:[7,3,1,""],remove_channel_owner:[7,3,1,""],remove_room_moderator:[7,3,1,""],remove_room_owner:[7,3,1,""]},"dino.db.rdbms":{dbman:[8,0,0,"-"],handler:[8,0,0,"-"],mock:[8,0,0,"-"],models:[8,0,0,"-"]},"dino.db.rdbms.dbman":{Database:[8,2,1,""]},"dino.db.rdbms.dbman.Database":{create_tables:[8,3,1,""],db_connect:[8,3,1,""],truncate:[8,3,1,""]},"dino.db.rdbms.handler":{DatabaseRdbms:[8,2,1,""],with_session:[8,1,1,""]},"dino.db.rdbms.handler.DatabaseRdbms":{add_acls_in_channel_for_action:[8,3,1,""],add_acls_in_room_for_action:[8,3,1,""],ban_user_channel:[8,3,1,""],ban_user_global:[8,3,1,""],ban_user_room:[8,3,1,""],channel_exists:[8,3,1,""],channel_for_room:[8,3,1,""],channel_name_exists:[8,3,1,""],create_channel:[8,3,1,""],create_private_channel_for_prefix:[8,3,1,""],create_private_channel_for_room:[8,3,1,""],create_room:[8,3,1,""],create_user:[8,3,1,""],delete_acl_in_channel_for_action:[8,3,1,""],delete_acl_in_room_for_action:[8,3,1,""],get_acl_validation_value:[8,3,1,""],get_acls_in_channel_for_action:[8,3,1,""],get_acls_in_room_for_action:[8,3,1,""],get_admins_channel:[8,3,1,""],get_all_acls_channel:[8,3,1,""],get_all_acls_room:[8,3,1,""],get_banned_users:[8,3,1,""],get_banned_users_for_channel:[8,3,1,""],get_banned_users_for_room:[8,3,1,""],get_banned_users_global:[8,3,1,""],get_channel_ban_timestamp:[8,3,1,""],get_channel_name:[8,3,1,""],get_channels:[8,3,1,""],get_global_ban_timestamp:[8,3,1,""],get_last_read_timestamp:[8,3,1,""],get_moderators_room:[8,3,1,""],get_owners_channel:[8,3,1,""],get_owners_room:[8,3,1,""],get_private_channel_for_prefix:[8,3,1,""],get_private_channel_for_room:[8,3,1,""],get_private_room:[8,3,1,""],get_room_ban_timestamp:[8,3,1,""],get_room_name:[8,3,1,""],get_super_users:[8,3,1,""],get_user_ban_status:[8,3,1,""],get_user_name:[8,3,1,""],get_user_status:[8,3,1,""],is_admin:[8,3,1,""],is_banned_from_channel:[8,3,1,""],is_banned_from_room:[8,3,1,""],is_banned_globally:[8,3,1,""],is_moderator:[8,3,1,""],is_owner:[8,3,1,""],is_owner_channel:[8,3,1,""],is_room_private:[8,3,1,""],is_super_user:[8,3,1,""],join_private_room:[8,3,1,""],join_room:[8,3,1,""],kick_user:[8,3,1,""],leave_room:[8,3,1,""],remove_admin:[8,3,1,""],remove_channel_ban:[8,3,1,""],remove_current_rooms_for_user:[8,3,1,""],remove_global_ban:[8,3,1,""],remove_moderator:[8,3,1,""],remove_owner:[8,3,1,""],remove_owner_channel:[8,3,1,""],remove_room:[8,3,1,""],remove_room_ban:[8,3,1,""],remove_super_user:[8,3,1,""],rename_channel:[8,3,1,""],rename_room:[8,3,1,""],room_contains:[8,3,1,""],room_exists:[8,3,1,""],room_name_exists:[8,3,1,""],rooms_for_channel:[8,3,1,""],rooms_for_user:[8,3,1,""],set_admin:[8,3,1,""],set_moderator:[8,3,1,""],set_owner:[8,3,1,""],set_owner_channel:[8,3,1,""],set_super_user:[8,3,1,""],set_user_invisible:[8,3,1,""],set_user_name:[8,3,1,""],set_user_offline:[8,3,1,""],set_user_online:[8,3,1,""],update_acl_in_channel_for_action:[8,3,1,""],update_acl_in_room_for_action:[8,3,1,""],update_last_read_for:[8,3,1,""],users_in_room:[8,3,1,""]},"dino.db.rdbms.mock":{FakeSession:[8,2,1,""],MockDatabase:[8,2,1,""]},"dino.db.rdbms.models":{AclConfigs:[8,2,1,""],Acls:[8,2,1,""],Bans:[8,2,1,""],ChannelRoles:[8,2,1,""],Channels:[8,2,1,""],GlobalRoles:[8,2,1,""],LastReads:[8,2,1,""],RoomRoles:[8,2,1,""],Rooms:[8,2,1,""],UserStatus:[8,2,1,""],Users:[8,2,1,""]},"dino.db.rdbms.models.AclConfigs":{acl_type:[8,4,1,""],acl_value:[8,4,1,""],id:[8,4,1,""],method:[8,4,1,""]},"dino.db.rdbms.models.Acls":{acl_type:[8,4,1,""],acl_value:[8,4,1,""],action:[8,4,1,""],channel:[8,4,1,""],channel_id:[8,4,1,""],id:[8,4,1,""],room:[8,4,1,""],room_id:[8,4,1,""]},"dino.db.rdbms.models.Bans":{channel:[8,4,1,""],channel_id:[8,4,1,""],duration:[8,4,1,""],id:[8,4,1,""],is_global:[8,4,1,""],room:[8,4,1,""],room_id:[8,4,1,""],timestamp:[8,4,1,""],user_id:[8,4,1,""],user_name:[8,4,1,""],uuid:[8,4,1,""]},"dino.db.rdbms.models.ChannelRoles":{channel:[8,4,1,""],channel_id:[8,4,1,""],id:[8,4,1,""],roles:[8,4,1,""],user_id:[8,4,1,""]},"dino.db.rdbms.models.Channels":{"private":[8,4,1,""],acls:[8,4,1,""],bans:[8,4,1,""],created:[8,4,1,""],id:[8,4,1,""],name:[8,4,1,""],roles:[8,4,1,""],rooms:[8,4,1,""],uuid:[8,4,1,""]},"dino.db.rdbms.models.GlobalRoles":{id:[8,4,1,""],roles:[8,4,1,""],user_id:[8,4,1,""]},"dino.db.rdbms.models.LastReads":{id:[8,4,1,""],room_uuid:[8,4,1,""],time_stamp:[8,4,1,""],user_id:[8,4,1,""]},"dino.db.rdbms.models.RoomRoles":{id:[8,4,1,""],roles:[8,4,1,""],room:[8,4,1,""],room_id:[8,4,1,""],user_id:[8,4,1,""]},"dino.db.rdbms.models.Rooms":{"private":[8,4,1,""],acls:[8,4,1,""],bans:[8,4,1,""],channel:[8,4,1,""],channel_id:[8,4,1,""],created:[8,4,1,""],id:[8,4,1,""],name:[8,4,1,""],roles:[8,4,1,""],users:[8,4,1,""],uuid:[8,4,1,""]},"dino.db.rdbms.models.UserStatus":{id:[8,4,1,""],status:[8,4,1,""],uuid:[8,4,1,""]},"dino.db.rdbms.models.Users":{id:[8,4,1,""],name:[8,4,1,""],private_room_id:[8,4,1,""],rooms:[8,4,1,""],uuid:[8,4,1,""]},"dino.db.redis":{DatabaseRedis:[6,2,1,""]},"dino.db.redis.DatabaseRedis":{add_acls_in_channel_for_action:[6,3,1,""],add_acls_in_room_for_action:[6,3,1,""],ban_user_channel:[6,3,1,""],ban_user_global:[6,3,1,""],ban_user_room:[6,3,1,""],channel_exists:[6,3,1,""],channel_for_room:[6,3,1,""],channel_name_exists:[6,3,1,""],create_channel:[6,3,1,""],create_private_channel_for_prefix:[6,3,1,""],create_private_channel_for_room:[6,3,1,""],create_room:[6,3,1,""],create_user:[6,3,1,""],delete_acl_in_channel_for_action:[6,3,1,""],delete_acl_in_room_for_action:[6,3,1,""],get_acl_validation_value:[6,3,1,""],get_acls_in_channel_for_action:[6,3,1,""],get_acls_in_room_for_action:[6,3,1,""],get_admins_channel:[6,3,1,""],get_all_acls_channel:[6,3,1,""],get_all_acls_room:[6,3,1,""],get_banned_users:[6,3,1,""],get_banned_users_for_channel:[6,3,1,""],get_banned_users_for_room:[6,3,1,""],get_banned_users_global:[6,3,1,""],get_channel_ban_timestamp:[6,3,1,""],get_channel_name:[6,3,1,""],get_channels:[6,3,1,""],get_global_ban_timestamp:[6,3,1,""],get_last_read_timestamp:[6,3,1,""],get_moderators_room:[6,3,1,""],get_owners_channel:[6,3,1,""],get_owners_room:[6,3,1,""],get_private_channel_for_prefix:[6,3,1,""],get_private_channel_for_room:[6,3,1,""],get_private_room:[6,3,1,""],get_room_ban_timestamp:[6,3,1,""],get_room_name:[6,3,1,""],get_super_users:[6,3,1,""],get_user_ban_status:[6,3,1,""],get_user_name:[6,3,1,""],get_user_status:[6,3,1,""],is_admin:[6,3,1,""],is_banned_from_channel:[6,3,1,""],is_banned_from_room:[6,3,1,""],is_banned_globally:[6,3,1,""],is_moderator:[6,3,1,""],is_owner:[6,3,1,""],is_owner_channel:[6,3,1,""],is_room_private:[6,3,1,""],is_super_user:[6,3,1,""],join_room:[6,3,1,""],kick_user:[6,3,1,""],leave_room:[6,3,1,""],redis:[6,4,1,""],remove_admin:[6,3,1,""],remove_channel_ban:[6,3,1,""],remove_current_rooms_for_user:[6,3,1,""],remove_global_ban:[6,3,1,""],remove_moderator:[6,3,1,""],remove_owner:[6,3,1,""],remove_owner_channel:[6,3,1,""],remove_room:[6,3,1,""],remove_room_ban:[6,3,1,""],remove_super_user:[6,3,1,""],rename_channel:[6,3,1,""],rename_room:[6,3,1,""],room_contains:[6,3,1,""],room_exists:[6,3,1,""],room_name_exists:[6,3,1,""],rooms_for_channel:[6,3,1,""],rooms_for_user:[6,3,1,""],set_admin:[6,3,1,""],set_moderator:[6,3,1,""],set_owner:[6,3,1,""],set_owner_channel:[6,3,1,""],set_super_user:[6,3,1,""],set_user_invisible:[6,3,1,""],set_user_name:[6,3,1,""],set_user_offline:[6,3,1,""],set_user_online:[6,3,1,""],update_acl_in_channel_for_action:[6,3,1,""],update_acl_in_room_for_action:[6,3,1,""],update_last_read_for:[6,3,1,""],users_in_room:[6,3,1,""]},"dino.endpoint":{sockets:[9,0,0,"-"]},"dino.endpoint.sockets":{Worker:[9,2,1,""],chat:[9,1,1,""],consume:[9,1,1,""],handle_server_activity:[9,1,1,""],index:[9,1,1,""],requires_roles:[9,1,1,""],respond_with:[9,1,1,""],send_css:[9,1,1,""],send_js:[9,1,1,""]},"dino.endpoint.sockets.Worker":{get_consumers:[9,3,1,""],on_iteration:[9,3,1,""],process_task:[9,3,1,""]},"dino.environ":{ConfigDict:[0,2,1,""],GNEnvironment:[0,2,1,""],choose_queue_instance:[0,1,1,""],create_env:[0,1,1,""],create_logger:[0,1,1,""],find_config:[0,1,1,""],find_config_acl:[0,1,1,""],get_acl_config:[0,1,1,""],init_acl_validators:[0,1,1,""],init_auth_service:[0,1,1,""],init_cache_service:[0,1,1,""],init_database:[0,1,1,""],init_pub_sub:[0,1,1,""],init_storage_engine:[0,1,1,""],initialize_env:[0,1,1,""]},"dino.environ.ConfigDict":{DefaultValue:[0,2,1,""],get:[0,3,1,""],keys:[0,3,1,""],set:[0,3,1,""],sub:[0,3,1,""],subp:[0,3,1,""]},"dino.environ.ConfigDict.DefaultValue":{format:[0,3,1,""],lower:[0,3,1,""]},"dino.exceptions":{AclValueNotFoundException:[0,6,1,""],ChannelExistsException:[0,6,1,""],ChannelNameExistsException:[0,6,1,""],EmptyChannelNameException:[0,6,1,""],EmptyRoomNameException:[0,6,1,""],InvalidAclTypeException:[0,6,1,""],InvalidAclValueException:[0,6,1,""],InvalidApiActionException:[0,6,1,""],NoChannelFoundException:[0,6,1,""],NoOriginChannelException:[0,6,1,""],NoOriginRoomException:[0,6,1,""],NoRoomNameException:[0,6,1,""],NoSuchChannelException:[0,6,1,""],NoSuchRoomException:[0,6,1,""],NoSuchUserException:[0,6,1,""],NoTargetChannelException:[0,6,1,""],NoTargetRoomException:[0,6,1,""],RoomExistsException:[0,6,1,""],RoomNameExistsForChannelException:[0,6,1,""],UnknownBanTypeException:[0,6,1,""],UserExistsException:[0,6,1,""],ValidationException:[0,6,1,""]},"dino.forms":{LoginForm:[0,2,1,""]},"dino.forms.LoginForm":{create:[0,5,1,""]},"dino.server":{create_app:[0,1,1,""]},"dino.storage":{cassandra:[10,0,0,"-"],cassandra_driver:[10,0,0,"-"],redis:[10,0,0,"-"]},"dino.storage.cassandra":{CassandraStorage:[10,2,1,""]},"dino.storage.cassandra.CassandraStorage":{delete_message:[10,3,1,""],driver:[10,4,1,""],get_history:[10,3,1,""],get_unread_history:[10,3,1,""],init:[10,3,1,""],session:[10,4,1,""],store_message:[10,3,1,""],validate:[10,3,1,""]},"dino.storage.cassandra_driver":{Driver:[10,2,1,""],StatementKeys:[10,2,1,""]},"dino.storage.cassandra_driver.Driver":{init:[10,3,1,""],msg_delete:[10,3,1,""],msg_insert:[10,3,1,""],msgs_select:[10,3,1,""],msgs_select_since_time:[10,3,1,""]},"dino.storage.cassandra_driver.StatementKeys":{msg_insert:[10,4,1,""],msg_select:[10,4,1,""],msg_select_one:[10,4,1,""],msgs_select:[10,4,1,""],msgs_select_by_time_stamp:[10,4,1,""]},"dino.storage.redis":{StorageRedis:[10,2,1,""]},"dino.storage.redis.StorageRedis":{delete_message:[10,3,1,""],get_history:[10,3,1,""],get_unread_history:[10,3,1,""],redis:[10,4,1,""],store_message:[10,3,1,""]},"dino.utils":{activity_for_connect:[11,1,1,""],activity_for_create_room:[11,1,1,""],activity_for_disconnect:[11,1,1,""],activity_for_get_acl:[11,1,1,""],activity_for_history:[11,1,1,""],activity_for_join:[11,1,1,""],activity_for_leave:[11,1,1,""],activity_for_list_channels:[11,1,1,""],activity_for_list_rooms:[11,1,1,""],activity_for_owners:[11,1,1,""],activity_for_user_joined:[11,1,1,""],activity_for_user_kicked:[11,1,1,""],activity_for_users_in_room:[11,1,1,""],ban_duration_to_timestamp:[11,1,1,""],ban_user:[11,1,1,""],can_send_cross_room:[11,1,1,""],channel_exists:[11,1,1,""],decorators:[11,0,0,"-"],get_acls_for_channel:[11,1,1,""],get_acls_for_room:[11,1,1,""],get_acls_in_channel_for_action:[11,1,1,""],get_acls_in_room_for_action:[11,1,1,""],get_channel_for_room:[11,1,1,""],get_current_user_role:[11,1,1,""],get_history_for_room:[11,1,1,""],get_last_read_for:[11,1,1,""],get_owners_for_room:[11,1,1,""],get_room_name:[11,1,1,""],get_sid_for_user_id:[11,1,1,""],get_user_name_for:[11,1,1,""],get_user_status:[11,1,1,""],get_users_in_room:[11,1,1,""],handlers:[11,0,0,"-"],is_admin:[11,1,1,""],is_banned:[11,1,1,""],is_banned_globally:[11,1,1,""],is_moderator:[11,1,1,""],is_owner:[11,1,1,""],is_owner_channel:[11,1,1,""],is_room_private:[11,1,1,""],is_super_user:[11,1,1,""],is_user_in_room:[11,1,1,""],join_the_room:[11,1,1,""],kick_user:[11,1,1,""],remove_user_from_room:[11,1,1,""],room_exists:[11,1,1,""],set_name_for_user_id:[11,1,1,""],set_sid_for_user_id:[11,1,1,""],update_last_reads:[11,1,1,""],user_is_allowed_to_delete_message:[11,1,1,""]},"dino.utils.decorators":{pre_process:[11,1,1,""]},"dino.utils.handlers":{GracefulInterruptHandler:[11,2,1,""]},"dino.utils.handlers.GracefulInterruptHandler":{release:[11,3,1,""]},"dino.validation":{acl:[12,0,0,"-"],base:[12,0,0,"-"],duration:[12,0,0,"-"],generic:[12,0,0,"-"],request:[12,0,0,"-"]},"dino.validation.acl":{AclConfigValidator:[12,2,1,""],AclDisallowValidator:[12,2,1,""],AclRangeValidator:[12,2,1,""],AclSameChannelValidator:[12,2,1,""],AclSameRoomValidator:[12,2,1,""],AclStrInCsvValidator:[12,2,1,""],AclValidator:[12,2,1,""],BaseAclValidator:[12,2,1,""]},"dino.validation.acl.AclConfigValidator":{check_acl_actions:[12,5,1,""],check_acl_excludes:[12,5,1,""],check_acl_keys_in_available:[12,5,1,""],check_acl_roots:[12,5,1,""],check_acl_rules:[12,5,1,""],check_acl_validation_methods:[12,5,1,""],validate_acl_config:[12,5,1,""]},"dino.validation.acl.AclDisallowValidator":{validate_new_acl:[12,3,1,""]},"dino.validation.acl.AclRangeValidator":{validate_new_acl:[12,3,1,""]},"dino.validation.acl.AclSameChannelValidator":{validate_new_acl:[12,3,1,""]},"dino.validation.acl.AclSameRoomValidator":{validate_new_acl:[12,3,1,""]},"dino.validation.acl.AclStrInCsvValidator":{validate_new_acl:[12,3,1,""]},"dino.validation.acl.AclValidator":{is_acl_valid:[12,3,1,""],validate_acl_for_action:[12,3,1,""]},"dino.validation.acl.BaseAclValidator":{validate_new_acl:[12,3,1,""]},"dino.validation.base":{BaseValidator:[12,2,1,""]},"dino.validation.base.BaseValidator":{validate_login:[12,3,1,""],validate_request:[12,3,1,""],validate_session:[12,3,1,""]},"dino.validation.duration":{DurationValidator:[12,2,1,""]},"dino.validation.duration.DurationValidator":{durations:[12,4,1,""],durations_help:[12,4,1,""]},"dino.validation.generic":{GenericValidator:[12,2,1,""]},"dino.validation.generic.GenericValidator":{chars_in_list:[12,5,1,""],is_digit:[12,5,1,""],is_string:[12,5,1,""],match:[12,5,1,""]},"dino.validation.request":{RequestValidator:[12,2,1,""]},"dino.validation.request.RequestValidator":{on_ban:[12,3,1,""],on_create:[12,3,1,""],on_delete:[12,3,1,""],on_get_acl:[12,3,1,""],on_history:[12,3,1,""],on_join:[12,3,1,""],on_kick:[12,3,1,""],on_leave:[12,3,1,""],on_list_channels:[12,3,1,""],on_list_rooms:[12,3,1,""],on_login:[12,3,1,""],on_message:[12,3,1,""],on_set_acl:[12,3,1,""],on_status:[12,3,1,""],on_users_in_room:[12,3,1,""]},dino:{admin:[1,0,0,"-"],api:[0,0,0,"-"],auth:[4,0,0,"-"],cache:[5,0,0,"-"],config:[0,0,0,"-"],db:[6,0,0,"-"],endpoint:[9,0,0,"-"],environ:[0,0,0,"-"],exceptions:[0,0,0,"-"],forms:[0,0,0,"-"],server:[0,0,0,"-"],storage:[10,0,0,"-"],utils:[11,0,0,"-"],validation:[12,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","staticmethod","Python static method"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute","5":"py:staticmethod","6":"py:exception"},terms:{"boolean":12,"class":[0,4,5,6,7,8,9,10,11,12],"default":0,"enum":[0,10],"final":10,"int":[0,4,5,6,8,10,12],"new":0,"return":[0,8,12],"static":[0,12],"super":0,"true":11,_acl:0,_config_dict:0,_environ:0,_logger:0,_redi:0,_session:0,_version:0,accept:10,acl:[0,6],acl_path:0,acl_target:12,acl_typ:[0,6,7,8,12],acl_valid:0,acl_valu:[0,6,7,8,11,12],aclconfig:8,aclconfigvalid:12,acldisallowvalid:12,aclmanag:7,aclrangevalid:12,aclsamechannelvalid:12,aclsameroomvalid:12,aclstrincsvvalid:12,aclvalid:12,aclvaluenotfoundexcept:0,action:[0,6,7,8,11,12],activ:[0,9,10,11,12],activiti:[0,9,10,11,12],activity_for_connect:11,activity_for_create_room:11,activity_for_disconnect:11,activity_for_get_acl:11,activity_for_histori:11,activity_for_join:11,activity_for_leav:11,activity_for_list_channel:11,activity_for_list_room:11,activity_for_own:11,activity_for_user_join:11,activity_for_user_kick:11,activity_for_users_in_room:11,activitystream:[0,9,10,11,12],actor:0,add_acl_channel:7,add_acl_room:7,add_acls_in_channel_for_act:[6,8],add_acls_in_room_for_act:[6,8],add_channel_admin:7,add_channel_own:7,add_room_moder:7,add_room_own:7,addit:0,admin:0,after:0,all:12,all_act:12,all_api_act:0,allow:0,allowallauth:4,also:10,always_returns_non:5,ani:0,apiaction:0,apitarget:0,arg:5,asctim:0,attach:0,auth:0,auth_kei:0,auth_service:0,authenticate_and_populate_sess:4,authredi:4,available_acl:12,ban:[0,8],ban_dur:[6,8,11,12],ban_duration_to_timestamp:11,ban_timestamp:[6,8],ban_typ:0,ban_us:[7,11],ban_user_channel:[6,8],ban_user_glob:[6,8],ban_user_room:[6,8],banned_us:0,banned_users_channel:0,base:[0,4,5,6],baseaclvalid:12,basemanag:7,basevalid:12,been:0,bitmap:0,bodi:[9,10],bool:[4,6,8,11,12],cach:0,cache_service:0,cacheallmiss:5,cacheredi:5,call:0,can:10,can_send_cross_room:11,cassandra:0,cassandra_driv:0,cassandra_interfac:0,cassandrastorag:10,chang:0,channel:[0,6],channel_acl:0,channel_exist:[6,8,11],channel_for_room:[0,6,8],channel_id:[0,5,6,7,8,10,11],channel_nam:[0,6,7,8],channel_name_exist:[6,8],channel_predix:6,channel_prefix:[0,6,8],channel_rol:0,channel_uuid:0,channelexistsexcept:0,channelmanag:7,channelnameexistsexcept:0,channelrol:8,char_list:12,chars_in_list:12,chat:9,check:12,check_acl:12,check_acl_act:12,check_acl_exclud:12,check_acl_keys_in_avail:12,check_acl_root:12,check_acl_rul:12,check_acl_validation_method:12,choose_queue_inst:0,citi:0,client:[0,12],cluster:10,commun:12,complet:10,config_dict:0,config_path:0,configdict:0,configkei:0,configur:0,connect:[0,8,9],consum:9,consumermixin:9,could:10,countri:0,creat:[0,8],create_admin_us:7,create_app:0,create_channel:[6,7,8],create_env:0,create_logg:0,create_private_channel_for_prefix:[6,8],create_private_channel_for_room:[6,8],create_room:[6,7,8],create_t:8,create_us:[6,8],crossgroup:0,crossroom:0,csv:12,dai:12,data:[0,12],databas:[0,8],database:0,databaserdbm:8,databaseredi:6,date_format:0,db_connect:8,dbman:[0,6],debug:0,declar:8,decor:0,default_date_format:0,default_history_limit:0,default_history_strategy:0,default_log_format:0,default_log_level:0,default_redis_host:0,defaultvalu:0,delet:10,delete_acl_channel:7,delete_acl_in_channel_for_act:[6,8],delete_acl_in_room_for_act:[6,8],delete_acl_room:7,delete_messag:10,denyallauth:4,dict:[0,4,6,7,8,11,12],dino_env:0,directli:0,disconnect:0,display_nam:0,displaynam:0,domain:[0,10],doubl:10,driver:[0,10],duplic:10,durat:[0,5,7,8],durations_help:12,durationvalid:12,els:0,emptychannelnameexcept:0,emptyroomnameexcept:0,endpoint:0,engin:8,enumer:[0,10],env:[6,7,8],environment:0,error:0,error_messag:12,event:0,everyth:10,exception:0,exclud:12,ext:8,fake_check:0,fakesess:8,fals:[0,10],field:0,find_config:0,find_config_acl:0,fix:8,flag:10,flushal:5,format:0,frequent:10,fridai:8,from:[0,8,10,12],from_room_uuid:11,from_us:10,gender:0,gener:0,genericvalid:12,get:[0,5,10],get_acl_config:0,get_acl_validation_valu:[6,8],get_acls_channel:7,get_acls_for_channel:11,get_acls_for_room:11,get_acls_in_channel_for_act:[6,8,11],get_acls_in_room_for_act:[6,8,11],get_acls_room:7,get_admin:7,get_admins_channel:[6,8],get_all_acls_channel:[6,8],get_all_acls_room:[6,8],get_banned_us:[6,7,8],get_banned_users_for_channel:[6,8],get_banned_users_for_room:[6,8],get_banned_users_glob:[6,8],get_channel:[6,7,8],get_channel_ban_timestamp:[5,6,8],get_channel_exist:5,get_channel_for_room:[5,11],get_channel_nam:[5,6,8],get_consum:9,get_current_user_rol:11,get_global_ban_timestamp:[5,6,8],get_histori:10,get_history_for_room:11,get_last_read_for:11,get_last_read_timestamp:[6,8],get_moder:7,get_moderators_room:[6,8],get_own:7,get_owners_channel:[6,8],get_owners_for_room:11,get_owners_room:[6,8],get_private_channel_for_prefix:[6,8],get_private_channel_for_room:[6,8],get_private_room:[6,8],get_room:7,get_room_ban_timestamp:[5,6,8],get_room_exist:5,get_room_id_for_nam:5,get_room_nam:[5,6,8,11],get_sid_for_user_id:11,get_super_us:[6,7,8],get_unread_histori:10,get_us:7,get_user_ban_statu:[6,8],get_user_nam:[5,6,8],get_user_name_for:11,get_user_statu:[5,6,8,11],get_users_for_room:7,get_users_in_room:11,global:0,global_rol:0,globalrol:8,gn_env:0,gn_event_nam:9,gnenviron:[0,6,7,8],gracefulinterrupthandl:[9,11],group:0,hack:8,handle_server_act:9,handler:[0,6],has_webcam:0,here:10,histori:0,history:0,history_type_top:0,history_type_unread:0,horribl:8,host:[0,4,5,6,10],hour:12,imag:0,image_url:11,includ:0,index:[9,10,13],info:0,init:10,init_acl_valid:0,init_auth_servic:0,init_cache_servic:0,init_databas:0,init_pub_sub:0,init_storage_engin:0,initialize_env:0,instanc:8,instead:0,invalidacltypeexcept:0,invalidaclvalueexcept:0,invalidapiactionexcept:0,invis:0,is_acl_valid:12,is_admin:[6,8,11],is_ban:11,is_banned_from_channel:[6,8],is_banned_from_room:[6,8],is_banned_glob:[6,8,11],is_digit:12,is_glob:8,is_moder:[6,8,11],is_own:[6,8,11],is_owner_channel:[6,8,11],is_room_priv:[6,8,11],is_str:12,is_super_us:[6,8,11],is_user_in_room:11,is_valid:12,join:0,join_private_room:8,join_room:[6,8],join_the_room:11,json:0,kei:[0,5,12],key_spac:10,kick:0,kick_us:[6,7,8,11],kicked_id:11,kicked_nam:11,kicker:0,kicker_id:11,kicker_nam:11,kind:0,kombu:9,kwarg:[5,8],last_read:[0,10,11],lastread:8,leav:0,leave_room:[6,8],levelnam:0,like:10,limit:[0,10],list:[0,7,10,11,12],localhost:0,log:0,log_format:0,log_level:0,logger:0,loginform:0,longer:0,lower:[0,10],made:0,manag:[0,6],map:0,match:12,materi:10,membership:0,memorycach:5,messag:[0,9,10,11],message:0,message_id:10,messages_by_id:10,method:8,minut:12,miss:0,mixin:9,mock:[0,6],mockdatabas:8,model:[0,6],moder:0,moderator:0,msg:0,msg_delet:10,msg_id:10,msg_insert:10,msg_select:10,msg_select_on:10,msgs_select:10,msgs_select_by_time_stamp:10,msgs_select_since_tim:10,multicat:0,must:0,name:[0,8],name_for_uuid:7,need:0,new_acl:8,night:8,nochannelfoundexcept:0,none:[0,5,6,7,8,9,10,11,12],nonetyp:[0,4,6,8,11],nooriginchannelexcept:0,nooriginroomexcept:0,noroomnameexcept:0,nosuchchannelexcept:0,nosuchroomexcept:0,nosuchuserexcept:0,notargetchannelexcept:0,notargetroomexcept:0,object:[0,4,5,6,7,8,10,11,12],object_typ:0,offlin:0,on_ban:[0,12],on_connect:0,on_creat:[0,12],on_delet:[0,12],on_disconnect:0,on_get_acl:[0,12],on_histori:[0,12],on_iter:9,on_join:[0,12],on_kick:[0,12],on_leav:[0,12],on_list_channel:[0,12],on_list_room:[0,12],on_login:[0,12],on_messag:[0,12],on_set_acl:[0,12],on_statu:[0,12],on_users_in_room:[0,12],onli:[0,10],onlin:0,online_bitmap:0,online_set:0,oper:10,option:0,orm:[0,1],other_statu:5,overrid:0,owner:[0,11],page:13,param:0,paramet:[0,10,12],parent:0,pars:0,password:0,path:9,perform:8,ping:0,plu:0,point:0,port:[0,4,5,6,10],pre_process:[0,11],primari:10,privat:[0,8],private_channel_for_prefix:0,private_room:0,private_room_id:8,private_rooms_in_channel:0,process_task:9,queri:10,queue:0,rdbm:[0,6],read:0,receiv:12,redi:0,redis:0,rediskei:0,regex:12,releas:11,remov:10,remove_admin:[6,8],remove_channel_admin:7,remove_channel_ban:[6,8],remove_channel_own:7,remove_current_rooms_for_us:[6,8],remove_global_ban:[6,8],remove_moder:[6,8],remove_own:[6,8],remove_owner_channel:[6,8],remove_room:[6,7,8],remove_room_ban:[6,8],remove_room_moder:7,remove_room_own:7,remove_super_us:[6,8],remove_user_from_room:11,renam:7,rename_channel:[6,8],rename_room:[6,8],replic:[0,10],replication:0,request:0,requestvalid:12,requir:[10,12],requires_rol:9,requires_session_kei:0,respond_with:9,respons:0,resultset:10,rkey_acl_validation:0,rkey_auth:0,rkey_banned_users_channel:0,rkey_banned_users_global:0,rkey_banned_users_room:0,rkey_channel_acl:0,rkey_channel_for_rooms:0,rkey_channel_roles:0,rkey_channels:0,rkey_global_roles:0,rkey_last_read:0,rkey_multi_cast:0,rkey_online_bitmap:0,rkey_online_set:0,rkey_private_channel_for_prefix:0,rkey_private_rooms_in_channel:0,rkey_room_acl:0,rkey_room_history:0,rkey_room_id_for_name:0,rkey_room_name:0,rkey_room_owners:0,rkey_room_roles:0,rkey_rooms:0,rkey_rooms_for_user:0,rkey_rooms_private:0,rkey_sid_to_user_id:0,rkey_user_names:0,rkey_user_status:0,rkey_users_in_room:0,role:[0,8,9],rolekei:0,room:[0,6],room_acl:0,room_contain:[6,8],room_exist:[6,8,11],room_histori:0,room_id:[0,5,6,7,8,10,11],room_id_for_nam:0,room_nam:[0,5,6,7,8,11],room_name_exist:[6,8],room_name_for_id:0,room_own:0,room_rol:0,room_uuid:[0,8],roomexistsexcept:0,roommanag:7,roomnameexistsforchannelexcept:0,roomrol:8,rooms_for_channel:[6,8],rooms_for_us:[0,6,8],root_path:0,rootlogg:0,rout:0,row:10,rule:12,same:0,search:13,second:12,send:[0,12],send_css:9,send_j:9,sender:0,sent:0,sent_tim:10,session:[0,10,12],sessionkei:0,set:[0,5,8,12],set_admin:[6,8],set_channel_ban_timestamp:5,set_channel_exist:5,set_channel_for_room:5,set_global_ban_timestamp:5,set_moder:[6,8],set_name_for_user_id:11,set_own:[6,8],set_owner_channel:[6,8],set_room_ban_timestamp:5,set_room_exist:5,set_room_id_for_nam:5,set_sid_for_user_id:11,set_super_us:[6,8],set_user_invis:[5,6,8],set_user_nam:[5,6,8],set_user_offlin:[5,6,8],set_user_onlin:[5,6,8],setacl:0,should_validate_request:11,sid:[0,11],sid_for_user_id:0,side:12,sig:11,sigint:11,signal:11,signal_handl:9,simpl:0,sinc:[0,10],skip_init:0,socket:0,some:0,sqlalchemi:8,statementkei:10,statu:[0,8],status_available:0,status_chat:0,status_cod:0,status_invisible:0,status_unavailable:0,status_unknown:0,storag:0,storage:0,storageredi:10,store_messag:10,str:[0,4,5,6,7,8,10,11,12],strategi:[0,10],strategy:0,stream:0,string:12,sub:0,subp:0,successfulli:0,summari:0,super_user:0,suppli:0,tabl:10,tamper:12,target:[0,12],target_acl:12,target_id:7,target_typ:7,test:0,testing:0,thi:[0,8,10],three:10,time:0,time_stamp:[6,8,10],timestamp:[0,5,8],to_room_uuid:11,to_us:10,to_user_id:10,todo:8,token:[0,4,12],top:0,truncat:8,ttl:5,tupl:12,two:10,type:[0,4,6,8,11],ugli:8,union:[0,4,6,8,11],unknownbantypeexcept:0,unread:0,updat:[0,10],update_acl_in_channel_for_act:[6,8],update_acl_in_room_for_act:[6,8],update_channel_acl:7,update_last_read:11,update_last_read_for:[6,8],update_room_acl:7,url:0,user:[0,6],user_check_statu:5,user_id:[0,4,5,6,7,8,11,12],user_is_allowed_to_delete_messag:11,user_is_invis:5,user_is_offlin:5,user_is_onlin:5,user_nam:[0,5,6,7,8,11],user_statu:0,user_uuid:7,userexistsexcept:0,userkei:0,usermanag:7,usernam:5,users_in_room:[0,6,8],users_multi_cast:0,userstatu:8,util:[0,9],uuid:[0,8,10],val:[0,12],valid:[0,10],validate_acl_config:12,validate_acl_for_act:12,validate_login:12,validate_new_acl:12,validate_request:12,validate_sess:12,validation_method:[0,6,8],validation_nam:11,validationexcept:0,valu:[0,5,12],verb:0,verifi:12,version:0,view:10,view_func:8,were:12,when:0,whether:12,with_sess:8,worker:9,would:10},titles:["dino package","dino.admin package","dino.admin.forms package","dino.admin.orm package","dino.auth package","dino.cache package","dino.db package","dino.db.manager package","dino.db.rdbms package","dino.endpoint package","dino.storage package","dino.utils package","dino.validation package","Welcome to Dino&#8217;s documentation!","dino"],titleterms:{acl:[7,12],admin:[1,2,3],api:0,auth:4,base:[7,12],cach:5,cassandra:10,cassandra_driv:10,cassandra_interfac:10,channel:7,config:0,content:[0,1,2,3,4,5,6,7,8,9,10,11,12],dbman:8,decor:11,dino:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],document:13,durat:12,endpoint:9,environ:0,except:0,form:[0,2],gener:12,handler:[8,11],indice:13,manag:7,miss:5,mock:8,model:8,modul:[0,1,2,3,4,5,6,7,8,9,10,11,12],orm:3,packag:[0,1,2,3,4,5,6,7,8,9,10,11,12],rdbm:8,redi:[4,5,6,10],request:12,room:7,rout:1,server:0,simpl:4,socket:9,storag:10,submodul:[0,1,4,5,6,7,8,9,10,11,12],subpackag:[0,1,6],tabl:13,user:7,util:11,valid:12,web:0,welcom:13}})
#!/usr/bin/env python

from setuptools import setup, find_packages


version = '0.9.2'

setup(
    name='dino',
    version=version,
    description="Distributed Notifications",
    long_description="""Distributed notification server using websockets""",
    classifiers=[],
    keywords='notifications,chat,socketio,distributed',
    author='Oscar Eriksson',
    author_email='oscar.eriks@gmail.com',
    url='https://github.com/thenetcircle/dino',
    license='LICENSE.txt',
    packages=find_packages(exclude=['ez_setup', 'examples', 'tests']),
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        'zope.interface==4.3.2',   # interfaces
        'pyyaml==3.11',            # configuration files
        'redis==2.10.5',           # redis client
        'psycopg2==2.6.2',
        'sqlalchemy==1.1.1',
        'flask-socketio==2.7.1',
        'flask_wtf==0.12',
        'wtforms==2.1',
        'eventlet==0.19.0',
        'gevent==1.1.2',
        'mysqlclient==1.3.7',
        'gunicorn==19.6.0',
        'activitystreams==0.1.5',
        'codecov==2.0.5',
        'fakeredis==0.8.1',
        'nose==1.3.7',
        'codecov==2.0.5',
        'coverage==4.2',
        'cassandra-driver==3.7.0',
        'kombu==3.0.37',
        'typing==3.5.2.2',
        'nose-parameterized==0.5.0',
        'python-dateutil==2.5.3'
    ])

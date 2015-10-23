#!/usr/bin/python
# -*- coding: utf8 -*-

import web

from route import route
from database import *
from output import output

@route('/team/recruit/request/decline')
class TeamRecruitRequestDecline:
    def POST(self):
        pass
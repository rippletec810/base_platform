#!/usr/bin/python
# -*- coding: utf8 -*-

import web

from route import route
from database import *
from output import output

@route('/team/recruit/request/approve')
class TeamRecruitRequestApprove:
    def POST(self):
        input = web.input(request_id = None)

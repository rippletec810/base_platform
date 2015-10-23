#!/usr/bin/python
# -*- coding: utf8 -*-

from route import route
from output import *
from database import *

@route('/team/recruit/request/list')
class TeamRecruitRequestList:
    def POST(self):
        return output(200, TeamRecruitRequestList.getRequestList())
    def GET(self):
        return output(200, TeamRecruitRequestList.getRequestList())

    @staticmethod
    def getRequestList():
        pass
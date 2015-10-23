#!/usr/bin/python
# -*- coding: utf8 -*-

from route import route
from output import *
from database import *

@route('/user/team/member/list')
class UserTeamMemberList:
    def POST(self):
        return output(200, UserTeamMemberList.getMemberList())
    def GET(self):
        return output(200, UserTeamMemberList.getMemberList())

    @staticmethod
    def getMemberList():
        pass
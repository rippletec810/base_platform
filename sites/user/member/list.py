#!/usr/bin/python
# -*- coding: utf8 -*-

import web

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
        session = web.ctx.session
        if not session.has_key('user_id'):
            return output(411)
        if session['user_type'] not in (2, 3, 4):
            return output(410)

        team_id = session['team_id']
        db = getDb()
        results = db.select('user', vars = {'id':team_id}, where = "team_id=$id")
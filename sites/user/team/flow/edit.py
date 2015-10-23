#!/usr/bin/python
# -*- coding: utf8 -*-

from route import route
from output import *
from database import *

import web

@route('/team/flow/edit')
class TeamFlowEdit:
    def POST(self):
        input = web.input(flow_id = None, description = None, amount = None)
        if input.description == None or input.amount == None or input.flow_id == None:
            return output(110)
        try:
            input.flow_id = int(input.flow_id)
            input.amount = float(input.amount)
        except:
            return output(111)

        session = web.ctx.session
        if not session.has_key('user_id'):
            return output(411)
        if session['user_type'] not in (2, 3):
            return output(410)
        team_id = session['team_id']

        db = getDb()
        if len(db.select('flow', vars = {'id': input.flow_id, 'team_id': team_id},
                         where = "flow_id=$id and team_id=$team_id", what = 'flow_id')) == 0:
            return output(472)
        try:
            db.update('flow', vars = {'id': input.flow_id}, where = "flow_id=$id",
                      description = input.description, amount = input.amount)
        except:
            return output(700)
        return output(200)

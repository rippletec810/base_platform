#!/usr/bin/python
# -*- coding: utf8 -*-
#author: farseer810

import web

from route import route
from database import *
from output import output

@route('/base/team/detail/get')
class BaseTeamDetailGet:
    def POST(self):
        input = web.input(team_id = None)
        if input.team_id == None:
            return output(110)
        try:
            input.team_id = int(input.team_id)
        except:
            return output(111)

        db = getDb()

        if len(db.select('team', vars = {'id':input.team_id}, where = "team_id=$id")) == 0:
            return output(464)

        teaminfo = db.select('teaminfo', vars = {'id':input.team_id},
                             where = "team_id=$id", what = "logo_base64")[0]
        return output(200, {'team_id':input.team_id,  'logo_base64':teaminfo.logo_base64})

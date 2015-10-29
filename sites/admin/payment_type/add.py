#!/usr/bin/python
# -*- coding: utf8 -*-
#author: farseer810

import web

from route import route
from output import output
from database import *

@route('/admin/payment/type/add')
class AdminPaymentTypeAdd:
    def POST(self):
        input = web.input(type_name = None, type = None, parent_id = None)
        if input.type_name == None or input.type == None:
            return output(110)
        try:
            input.type = int(input.type)
            if input.parent_id != None:
                input.parent_id = int(input.parent_id)
        except:
            return output(111)

        if input.type not in (0, 1, 2, 3):
            return output(112)

        if input.type in (2, 3) and input.parent_id == None:
            return output(110)
        if input.type in (0, 1):
            input.parent_id = None

        session = web.ctx.session
        if not session.has_key('user_id'):
            return output(411)
        if session['user_type'] not in (0, 1):
            return output(410)

        db = getDb()
        if input.parent_id != None:
            payment_type = db.select('payment_type', vars = {'id':input.parent_id},
                         where = "payment_type_id=$id and (type='0' or type='1')")
            if len(payment_type) == 0:
                return output(473)
            type = int(payment_type[0].type)
            if type == 0 and input.type != 2:
                return output(112)
            if type == 1 and input.type != 3:
                return output(112)

        try:
            db.insert('payment_type', type_name = input.type_name, type = str(input.type),
                      parent_id = input.parent_id)
        except:
            return output(700)
        return output(200)

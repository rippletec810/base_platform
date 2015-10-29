#!/usr/bin/python
# -*- coding: utf8 -*-
#author: farseer810

import web

from route import route
from output import output
from database import *

@route('/admin/payment/type/edit')
class AdminPaymentTypeEdit:
    def POST(self):
        input = web.input(payment_type_id = None, type_name = None)
        if input.type_name == None or input.payment_type_id == None:
            return output(110)
        try:
            input.payment_type_id = int(input.payment_type_id)
        except:
            return output(111)

        session = web.ctx.session
        if not session.has_key('user_id'):
            return output(411)
        if session['user_type'] not in (0, 1):
            return output(410)

        db = getDb()
        payment_type = db.select('payment_type', vars = {'id':input.payment_type_id},
                         where = "payment_type_id=$id")
        if len(payment_type) == 0:
            return output(473)

        try:
            db.update('payment_type', vars = {'id':input.payment_type_id},
                      where = "payment_type_id=$id", type_name = input.type_name)
        except:
            return output(700)
        return output(200)

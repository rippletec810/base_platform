#!/usr/bin/python
# -*- coding: utf8 -*-

import json

def output(status_code, data = None):
    return json.dumps({'data' : data, 'status' : status_code})

#!/usr/bin/python
# -*- coding: utf8 -*-
#test
import web

def getDb():
    return web.database(dbn='mysql', db='base_platform', user='root', pw='123456')

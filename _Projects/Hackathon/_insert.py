import MySQLdb, string, random, csv, sys, ConfigParser, web
from datetime import date

HOST = "localhost";
USER == "ZAC"
PASSWD = "password"
DATABASE = "POOLERS"

urls = (
"/","index",
"/insert","insert"
)

app = web.application(urls, globals())

db=web.database(dbn='mysql', host=HOST, port=3306, user=USER, pw=PASSWD, db=DATABASE)

class index:
#colon seperated for time object military       strftime.org  aM.isoTime()
    class insert:
        def POST(self):
            passedData = dict(web.input())
            newID = db.insert('poolers')
            if 'firstName' in passedData:
                db.update('poolers', where="id = "+str(newID), firstName=passedData['firstName'])
            if 'lastName' in passedData:
                db.update('poolers', where="id = "+str(newID), lastName=passedData['lastName'])
            if 'email' in passedData:
                db.update('poolers', where="id = "+str(newID), email=passedData['email'])
            if 'aM' in passedData:
                aM=date.strftime(passedData['aM'], '%H:%m')
                db.update('poolers', where="id = "+str(newID), aM=aM.isoTime())
            if 'aT' in passedData:
                db.update('poolers', where="id = "+str(newID), aT=passedData['aT'])
            if 'aW' in passedData:
                db.update('poolers', where="id = "+str(newID), aW=passedData['aW'])
            if 'aTr' in passedData:
                db.update('poolers', where="id = "+str(newID), aTr=passedData['aTr'])
            if 'aF' in passedData:
                db.update('poolers', where="id = "+str(newID), aF=passedData['aF'])
            if 'dM' in passedData:
                db.update('poolers', where="id = "+str(newID), dM=passedData['dM'])
            if 'dT' in passedData:
                db.update('poolers', where="id = "+str(newID), dT=passedData['dT'])
            if 'dW' in passedData:
                db.update('poolers', where="id = "+str(newID), dW=passedData['dW'])
            if 'dTr' in passedData:
                db.update('poolers', where="id = "+str(newID), dTr=passedData['dTr'])
            if 'dF' in passedData:
                db.update('poolers', where="id = "+str(newID), dF=passedData['dF'])

if __name__ == '__main__':
    app.run()

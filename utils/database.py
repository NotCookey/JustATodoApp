import json
import sys

class Database:
	def __init__(self,database):
		self._db=database
		self._content=json.load(open(self._db))

	def Notes(self):
		return self._content

	def addNote(self,header,content,time,id,wrap):
		self._content[id]={"header":header,"content":content,"wrap":wrap,"time":time}
		json.dump(self._content,open(self._db,"w"),indent=4)
# Copyright (c) 2021, ADAGBE Leonel and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class Listedecamion(Document):
	 # this method will run every time a document is saved

	def before_save(self):
        	self.plaque = f'Camion {self.numero_camion} {self.serie_camion or ""}'
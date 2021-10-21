// Copyright (c) 2021, ADAGBE Leonel and contributors
// For license information, please see license.txt

frappe.ui.form.on('Import Transit', {

	date_reception_telex : function(frm) {

		frm.doc.ecart_reception_telex = "";
		let date_arrivee = frm.doc.date_arrivee.split("/");
		let date_reception_telex = frm.doc.date_reception_telex.split("/");
		let date1 = new Date(date_arrivee); 
		let date2 = new Date(date_reception_telex); 
		let msInDay = 1000 * 3600 * 24;
		let diff = date2.getTime() - date1.getTime();
		let duration = diff / msInDay;

		
		if(duration > 0) {
			console.log("Vous etes en penalite");
			// cur_frm.show("telex_alert");
			// frm.doc.ecart_reception_telex = duration;
			// frm.doc.telex_alert = "Hello"
	}
			else {
				console.log("Vous avez la chance");
				// frm.doc.ecart_reception_telex = "";
			// cur_frm.set_value("ecart_reception_telex", "Vous avez la chance");

			}
		
	 }
});

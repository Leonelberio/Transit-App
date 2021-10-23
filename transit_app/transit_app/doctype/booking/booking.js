// Copyright (c) 2021, ADAGBE Leonel and contributors
// For license information, please see license.txt

frappe.ui.form.on('Booking', {
	// refresh: function(frm) {

	// }

	setup: function(frm) {
		//Check duplicate
		frm.check_lorries_duplicate = function(frm, row){
			frm.doc.lorries.forEach(item => {
				if(row.plaque=='' || row.idx == item.idx){
					//Pass
				}else if(row.plaque == item.plaque){
						//Clear field
						row.plaque = '';
						frappe.throw(__(`${item.plaque} existe déjà à la ligne ${item.idx}`));
						frm.refresh_field('lorries');
					
				}
			})
		},

		frm.check_items_duplicate = function(frm, row){
			frm.doc.type_marchandises.forEach(item => {
				if(row.marchandise=='' || row.idx == item.idx){
					//Pass
				}else {
					if(row.marchandise == item.marchandise){
						//Clear field
						row.marchandise = '';
						frappe.throw(__(`${item.marchandise} existe déjà à la ligne ${item.idx}`));
						frm.refresh_field('type_marchandises');
					}
				}
			})
		}
	}
	

	

});

frappe.ui.form.on('Type Camion', {
		plaque: function(frm, cdt, cdn){
			let row = locals[cdt][cdn];
			frm.check_lorries_duplicate(frm, row);
		}
})

frappe.ui.form.on('Type Marchandise', {
	marchandise: function(frm, cdt, cdn){
		let row = locals[cdt][cdn];
		frm.check_items_duplicate(frm, row);
	}
})





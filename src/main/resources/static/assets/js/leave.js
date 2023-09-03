$('document').ready(function(){
	
	$('table #editButton').on('click', function(event){
		event.preventDefault();
		
		const href = $(this).attr('href');
		//send a get req to href an execute a function after that:
		$.get(href, function(leave, status){
			let leaveStatus;
			switch(leave.status){
				case "Pending": leaveStatus = "0";
				case "Approved": leaveStatus = "1";
				case "Rejected": leaveStatus = "2";
			}
			
			$('#idEdit').val(leave.id);
			$('#employeeEdit').val(leave.employee.id);
			$('#startDateEdit').val(leave.startDate?.substring(0,8) +
				 leave.startDate?.substring(11,13));
			$('#endDateEdit').val(leave.endDate?.substring(0,8) +
				 leave.endDate?.substring(11,13));
			$('#statusEdit').val(leaveStatus);
		});
		
		$('#editModal').modal('show');
			
	});
	
	$('table #deleteButton').on('click', function(event){
		event.preventDefault();
		
		const href = $(this).attr('href');
		$('#confirmDeleteButton').attr("href", href);
		
		$('#deleteModal').modal('show');		

	});
});

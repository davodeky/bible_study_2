$(document).ready(function(){
	$(".fa_times").click(function(){
		$(".sidebar_menu").addClass("hide_menu");
		$(".toggle_menu").addClass("opacity_one");
	});
	$(".toggle_menu").click(function(){
		$(".sidebar_menu").removeClass("hide_menu");
		$(".toggle_menu").removeClass("opacity_one");
	});
	
	$(".navigation_item_schedule").click(function(){
		$(".schedule").addClass("schedule_display");
		$(".always_on").addClass("shed_off");
		if($(".contacts").hasClass("contacts_display")){
		$(".contacts").removeClass("contacts_display");	
		}
		if($(".announcements").hasClass("announcements_display")){
		$(".announcements").removeClass("announcements_display");	
		}
		if($(".study_main_themes").hasClass("study_main_themes_display")){
		$(".study_main_themes").removeClass("study_main_themes_display");	
		}
		 if($(".study_20170216").hasClass("study_20170216_display")){
		$(".study_20170216").removeClass("study_20170216_display");	
		}	
	});
	
	$(".fa_times_1").click(function(){
		$(".schedule").removeClass("schedule_display");
		$(".always_on").removeClass("shed_off");
		
	});
	
	$(".navigation_item_contacts").click(function(){
		$(".contacts").addClass("contacts_display");
		$(".always_on").addClass("shed_off");
		if($(".schedule").hasClass("schedule_display")){
		$(".schedule").removeClass("schedule_display");	
		}
		if($(".announcements").hasClass("announcements_display")){
		$(".announcements").removeClass("announcements_display");	
		}
		if($(".study_main_themes").hasClass("study_main_themes_display")){
		$(".study_main_themes").removeClass("study_main_themes_display");	
		}
		 if($(".study_20170216").hasClass("study_20170216_display")){
		$(".study_20170216").removeClass("study_20170216_display");	
		}	
	});
	
	$(".fa_times_2").click(function(){
		$(".contacts").removeClass("contacts_display");
		$(".always_on").removeClass("shed_off");
		
	});
	
	$(".navigation_item_announcements").click(function(){
		$(".announcements").addClass("announcements_display");
		$(".always_on").addClass("shed_off");
		if($(".contacts").hasClass("contacts_display")){
		$(".contacts").removeClass("contacts_display");	
		}
		if($(".schedule").hasClass("schedule_display")){
		$(".schedule").removeClass("schedule_display");	
		}
		if($(".study_main_themes").hasClass("study_main_themes_display")){
		$(".study_main_themes").removeClass("study_main_themes_display");	
		}
		 if($(".study_20170216").hasClass("study_20170216_display")){
		$(".study_20170216").removeClass("study_20170216_display");	
		}	
	});
	
	$(".fa_times_3").click(function(){
		$(".announcements").removeClass("announcements_display");
		$(".always_on").removeClass("shed_off");
		
	});
	
$(".navigation_selection_ul_main_themes").click(function(){
		$(".study_main_themes").addClass("study_main_themes_display");
		$(".always_on").addClass("shed_off");	
        if($(".contacts").hasClass("contacts_display")){
		$(".contacts").removeClass("contacts_display");	
		}
		if($(".schedule").hasClass("schedule_display")){
		$(".schedule").removeClass("schedule_display");	
		}	
        if($(".announcements").hasClass("announcements_display")){
		$(".announcements").removeClass("announcements_display");	
		}		
		 if($(".study_20170216").hasClass("study_20170216_display")){
		$(".study_20170216").removeClass("study_20170216_display");	
		}	
	});
	
	$(".fa_times_4").click(function(){
		$(".study_main_themes").removeClass("study_main_themes_display");
		$(".always_on").removeClass("shed_off");
		
	});
	
$(".navigation_selection_ul_study_20170216").click(function(){
		$(".study_20170216").addClass("study_20170216_display");
		$(".always_on").addClass("shed_off");	
        if($(".contacts").hasClass("contacts_display")){
		$(".contacts").removeClass("contacts_display");	
		}
		if($(".schedule").hasClass("schedule_display")){
		$(".schedule").removeClass("schedule_display");	
		}	
        if($(".announcements").hasClass("announcements_display")){
		$(".announcements").removeClass("announcements_display");	
		}	
        if($(".study_main_themes").hasClass("study_main_themes_display")){
		$(".study_main_themes").removeClass("study_main_themes_display");	
		}		
	});
	
	$(".fa_times_5").click(function(){
		$(".study_20170216").removeClass("study_20170216_display");
		$(".always_on").removeClass("shed_off");
		
	});
	
});


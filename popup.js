var homepage = "http://zatch10.github.io./"
var source = sessionStorage.getItem('source');
var campaign = sessionStorage.getItem('Campaign');
var page = document.getElementsByTagName("title");

var popup = "http://zatch10.github.io./" + page + '_' + source + '_'  + campaign + ".html";

// $(function(){
//     $("#includedContent").load(popup); 
//   });

    popupWindow = window.open(
		popup,'popUpWindow','height=300,width=400,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')

// // switch(source){
// //     case "twitter":           
// //         twitter(campaign);
// //         break;

// //     case "facebook":
// //         facebook(campaign);
// //         break;

// //     case "linkedin":
// //         linkedin(campaign)
// //         break;

// //     case "instagram":
// //         instagram(campaign)
// //         break;

// //     default:
// //         break;
// // }

// // function twitter(campaign){
// //     switch(campaign){
// //         case "analytics":
// //             pages(page);
// //             break;
        
// //         default:
// //             break;
// //     }

// // }


// // function facebook(campaign){
// // }



// // function instagram(campaign){
// // }


// // function linkedin(campaign){
// // }



// // function pages(page){
// //     switch(page){
// //         case "contacts":

// //             break;

// //         case "blog":
// //             break;

// //         case "shop":
// //             break;

// //         default:
// //             break;
// //     }
// // }

// switch(page){
//     case "shop":
//         popup = 
// }
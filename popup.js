var source = sessionStorage.getItem('source');
var campaign = sessionStorage.getItem('Campaign');
var page = document.getElementsByTagName("title")[0];

var popup = page + source + campaign + ".html";

$(function(){
    $("#includedContent").load(popup); 
  });

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
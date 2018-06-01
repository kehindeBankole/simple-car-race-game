 $("#go").click(function(){
               var carwidth = $("#car1").width();
               var track = $(window).width() - carwidth;

               var raceTime1 = Math.floor( (Math.random() * 5000) + 1 );
        var raceTime2 = Math.floor( (Math.random() * 5000) + 1 );

        var isdone = false;
        var position = "first";

        $("#car1").animate({
                left : track
        }, raceTime1 , function(){
                if(isdone == false){
                        isdone = true;
                }else{
                        position = "second";
                }

                 $('#race1').text( 'Finished in ' + position + ' place and clocked in at ' + raceTime1 + ' milliseconds!' );
        });

$("#car2").animate({
                left : track
        }, raceTime2 , function(){
                if(isdone == false){
                        isdone = true;
                }else{
                        position = "second";
                }

                 $('#race2').text( 'Finished in ' + position + ' place and clocked in at ' + raceTime2 + ' milliseconds!' );
        });
       })
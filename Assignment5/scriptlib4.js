
                                      $("button#get_data").click(function() {
                                             var items = [];
                                             var i = 0;
                                             var airtable_read_endpoint = "https://api.airtable.com/v0/appAgox3WPwODsSrr/Plant?api_key=keyBadmTVmE3SwXQR";
                                             var dataSet = [];
                                             $.getJSON(airtable_read_endpoint, function(result) {
                                                    $.each(result.records, function(key,value) {
                                                        items = [];
                                                            items.push(value.fields.Plant_Name);
                                                              items.push('<td><img src="' + value.fields.Images + '" style="width: 150px;"/></td>');
                                                            items.push(value.fields.Plant_Size);
                                                            items.push(value.fields.Plant_Price_copy);
                                                            items.push(value.fields.Difficulty_Copy);
                                                            items.push(value.fields.Light_Level_Copy);
                                                            items.push(value.fields.Pet_Friendly_Copy);
                                                              items.push(value.fields.Discription);
                                                            dataSet.push(items);
                                                     }); // end .each
                                                  $("#example").DataTable( {
                                                      data: dataSet,
                                                      retrieve: true,
                                                      columns: [
                                                          { title: "Plant Name",
                                                            defaultContent:""},
                                                            { title: "Plant Images",
                                                              defaultContent:""},
                                                          { title: "Plant Size",
                                                            defaultContent:"" },
                                                          { title: "Plant Price",
                                                            defaultContent:""},
                                                            { title: "Difficulty",
                                                              defaultContent:""},
                                                              { title: "Light Level",
                                                                  defaultContent:""},
                                                                  { title: "Pet Friendly",
                                                                      defaultContent:""},
                                                                      { title: "Discription",
                                                                          defaultContent:""},

                                                        ]
                                                                    } );
                                                               }); // end .getJSON

                                                               var chart = c3.generate({
                                                                 size: {
                                                                       height: 240,
                                                                       width: 420
                                                                        },

                                                                   data: {
                                                                       columns: [
                                                                         ['small', 7],
                                                                         ['medium', 9],
                                                                         ['large', 6],
                                                                         ['xlarge', 6]
                                                                       ],
                                                                       type: 'bar',
                                                                       labels: true
                                                                   },
                                                                   bar: {
                                                                       width: {
                                                                           ratio: 0.5 // this makes bar width 50% of length between ticks
                                                                       },
                                                                       // or
                                                                       //width: 100 // this makes bar width 100px
                                                                       colors: {small:'green', medium:'blue', large:'#2d7227', xlarge:'#0d5407'},
                                                                       legend: { show: false },

                                                                   }
                                                               });

                                                            }); // end button

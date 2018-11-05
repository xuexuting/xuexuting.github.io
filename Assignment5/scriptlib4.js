
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
                                                                   data: {
                                                                       columns: [
                                                                           ['data1', 30, 200, 100, 400, 150, 250],
                                                                           ['data2', 130, 100, 140, 200, 150, 50]
                                                                       ],
                                                                       type: 'bar'
                                                                   },
                                                                   bar: {
                                                                       width: {
                                                                           ratio: 0.5 // this makes bar width 50% of length between ticks
                                                                       }
                                                                       // or
                                                                       //width: 100 // this makes bar width 100px
                                                                   }
                                                               });

                                                            }); // end button

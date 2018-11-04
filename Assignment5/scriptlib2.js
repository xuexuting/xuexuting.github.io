
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

                                                               var table2_items = [];
                                                               var i = 0;
                                                               var airtable_read_endpoint =
                                                               "https://api.airtable.com/v0/appAgox3WPwODsSrr/Plant?api_key=keyBadmTVmE3SwXQR";
                                                               var table2_dataSet = [];
                                                               $.getJSON(airtable_read_endpoint, function(result) {
                                                                      $.each(result.records, function(key,value) {
                                                                          table2_items = [];
                                                                              table2_items.push(value.fields.Plant_Size);
                                                                              table2_items.push(value.fields.Number);
                                                                              table2_dataSet.push(table2_items);
                                                                              console.log(table2_items);
                                                                       }); // end .each
                                                                       console.log(table2_dataSet);
                                                                      $('#table2').DataTable( {
                                                                          data: table2_dataSet,
                                                                          retrieve: true,
                                                                          ordering: false,
                                                                          columns: [
                                                                              { title: "Plant Size",
                                                                                defaultContent:""},
                                                                              { title: "Ratio",
                                                                                defaultContent:""},
                                                                          ] // rmf columns
                                                                      } ); // end dataTable

                                                                      var chart = c3.generate({
                                                                           data: {
                                                                               columns: table2_dataSet,
                                                                               type : 'pie'
                                                                           },
                                                                           pie: {
                                                                               title: "Plant Size:",
                                                                           }
                                                                       });

                                                                }); // end .getJSON


                                                            }); // end button

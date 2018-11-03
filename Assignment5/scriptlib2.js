$("button#get_data").click(function() {
       var items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appAgox3WPwODsSrr/Plant?api_key=keyBadmTVmE3SwXQR";
       var dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  items = [];
                      items.push(value.fields.Plant_Name);
                      items.push(value.fields.Every_Plant_Size);
                      items.push(value.fields.Plant_Price_copy);
                      items.push(value.fields.Difficulty_Copy);
                      items.push(value.fields.Light_Level_Copy);
                      items.push(value.fields.Pet_Friendly_Copy);
                        items.push(value.fields.Discription);
                          items.push(value.fields.Images);
                      dataSet.push(items);
               }); // end .each
               
            $("#example").DataTable( {
                data: dataSet,
                retrieve: true,
                columns: [
                    { title: "Plant Name",
                      defaultContent:""},
                    { title: "Every Plant Size",
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
                                    { title: "Images",
                                        defaultContent:""},

                  ]
                              } );
                              var chart = c3.generate({
                     data: {
                         columns: table2_dataSet,
                         type : 'bar'
                     },
                     bar: {
                         title: "Tasks for Each Stage:",
                     }
                 });
                         }); // end .getJSON
                      }); // end button

$("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appM38HXlEVhxmnqx/Tasks?api_key=keyTcsTzckqyBTlk8&sortField=_createdTime&sortDirection=desc";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.Name);
                       items.push(value.fields.Stage_Desc);
                       items.push(value.fields.Completed);
                       items.push(value.fields.Time_Estimate);
                       items.push(value.fields.Weight_Factor);
                       items.push(value.fields.converted);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#example').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "Name",
                       defaultContent:""},
                     { title: "Stage",
                         defaultContent:"" },
                     { title: "Completed",
                       defaultContent:"" },
                     { title: "Time Estimated",
                       defaultContent:""},
                     { title: "Weight Factor",
                         defaultContent:""},
                     { title: "Converted",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

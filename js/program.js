$(document).ready(function() {
  'use strict';
  $("#program-template").each(function(index) {
    $.getJSON($(this).data("program-json"), function(data) {
      Handlebars.registerHelper('keepBRTags', function(text) {
        // This function allows to keep <br> tags in a text
        let lines = text.split("<br>");
        let escaped_lines = lines.map(function(t){return Handlebars.Utils.escapeExpression(t);});
        let escaped_text = escaped_lines.join("<br>");
      
        return new Handlebars.SafeString(escaped_text);
      });

      var theTemplateScript = $("#program-template").html();
      var theTemplate = Handlebars.compile(theTemplateScript);

      var days = data['days'];
      for (var i = 0; i < days.length; i++) {
        var timeslots = days[i]['timeslots'];
        for (var j = 0; j < timeslots.length; j++) {
          if(timeslots[j]['sessions'].length > 1) {
            timeslots[j]['twosessions'] = true;
          }
          // Find Best Paper Awards (BPA) and Best Young Researcher Paper award (BYRPA)
          // Identified by having the correct category
          for (var session = 0; session < timeslots[j]['sessions'].length; session++) {
            var talks = timeslots[j]['sessions'][session]["talks"];
            if (talks) {
              for (var k = 0; k < talks.length; k++) {
                var talk = talks[k];
                if (talk["category"] == "Best Paper Award") {
                  talk["isBPA"] = true;
                }
                if (talk["category"] == "Best Young Researcher Paper Award") {
                  talk["isBYRPA"] = true;
                }
              }
            }
          }
        }
      }

      $.extend(data, {isSampleString: function() {
        return this.sampleString ==  'This is a string';}
      });

      var theCompiledHtml = theTemplate(data);
      var renderedProgram = document.getElementById('renderedProgram');
      renderedProgram.innerHTML = theCompiledHtml;
    })
    .fail(function(jqxhr, textStatus, error) {
      document.getElementById('renderedProgram');
      renderedProgram.innerHTML = '<p>The conference program is not currently available. Please check back later.</p>';

      if (textStatus === 'error') {
        console.log('program.json not found, check file name and try again');
      }
      else {
        console.log('There is a problem with program.json. The problem is ' + error);
      }
    });
  });
});

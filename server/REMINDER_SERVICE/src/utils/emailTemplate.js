function emailTemplate(
  departureCity,
  departureAirport,
  arrivalCity,
  arrivalAirport,
  departureTime,
  arrivalTime,
  passengerCount,
  totalPrice,
  flightNumber,
  name,
  reminderText
)
{

let htmlTemplate = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>

<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
  </o:OfficeDocumentSettings>
</xml>
  <h5>${reminderText}</h5>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title></title>
  
    <style type="text/css">
      @media only screen and (min-width: 620px) {
  .u-row {
    width: 600px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-33p33 {
    width: 199.98px !important;
  }

  .u-row .u-col-50 {
    width: 300px !important;
  }

  .u-row .u-col-100 {
    width: 600px !important;
  }

}

@media (max-width: 620px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: 100% !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

table, td { color: #000000; } @media (max-width: 480px) { #u_content_heading_1 .v-container-padding-padding { padding: 37px 18px 10px !important; } #u_content_heading_1 .v-font-size { font-size: 31px !important; } #u_content_heading_1 .v-line-height { line-height: 110% !important; } #u_content_image_1 .v-container-padding-padding { padding: 10px 10px 40px !important; } #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 82% !important; } #u_content_image_7 .v-src-width { width: auto !important; } #u_content_image_7 .v-src-max-width { max-width: 95% !important; } #u_column_3 .v-col-border { border-top: 0px solid transparent !important;border-left: 0px solid transparent !important;border-right: 0px solid transparent !important;border-bottom: 0px solid transparent !important; } #u_content_text_17 .v-container-padding-padding { padding: 10px 10px 0px !important; } #u_content_text_17 .v-text-align { text-align: center !important; } #u_content_heading_3 .v-container-padding-padding { padding: 0px 10px !important; } #u_content_heading_3 .v-text-align { text-align: center !important; } #u_content_text_9 .v-container-padding-padding { padding: 10px 10px 30px !important; } #u_content_text_9 .v-text-align { text-align: center !important; } #u_column_4 .v-col-border { border-top: 1px solid #22255e !important;border-left: 0px solid transparent !important;border-right: 0px solid transparent !important;border-bottom: 1px solid #22255e !important; } #u_content_image_5 .v-container-padding-padding { padding: 30px 10px !important; } #u_column_5 .v-col-border { border-top: 0px solid transparent !important;border-left: 0px solid transparent !important;border-right: 0px solid transparent !important;border-bottom: 0px solid transparent !important; } #u_content_text_3 .v-container-padding-padding { padding: 10px 10px 0px !important; } #u_content_text_3 .v-text-align { text-align: center !important; } #u_content_heading_5 .v-container-padding-padding { padding: 0px 10px !important; } #u_content_heading_5 .v-text-align { text-align: center !important; } #u_content_text_10 .v-container-padding-padding { padding: 10px 10px 30px !important; } #u_content_text_10 .v-text-align { text-align: center !important; } #u_content_heading_7 .v-container-padding-padding { padding: 0px 10px !important; } #u_content_divider_2 .v-container-padding-padding { padding: 15px 0px 0px !important; } #u_content_text_21 .v-container-padding-padding { padding: 30px 10px 0px !important; } #u_content_text_21 .v-text-align { text-align: center !important; } #u_content_text_14 .v-container-padding-padding { padding: 30px 10px 11px !important; } #u_content_text_14 .v-text-align { text-align: center !important; } }
    </style>
  
  

<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet" type="text/css">

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #1773bf;color: #000000">
  <div class="ie-container">
  <div class="mso-container">
  <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #1773bf;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #1773bf;">
    
  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;">
      
<td align="center" width="600" class="v-col-border" style="background-color: #01a9da;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top">
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="background-color: #01a9da;height: 100%;width: 100% !important;">
  <div class="v-col-border" style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
  
<table id="u_content_heading_1" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:60px 10px 10px;font-family:'Open Sans',sans-serif;" align="left">
        
  <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #22255e; line-height: 140%; text-align: center; word-wrap: break-word; font-family: 'Open Sans',sans-serif; font-size: 40px; font-weight: 400;"><strong style="color: #4a4a4a; text-align: left; white-space: normal; background-color: #ffffff;">TICKET</strong><span style="color: #4a4a4a; text-align: left; white-space: normal; background-color: #ffffff; float: none; display: inline; line-height: 56px;"> - </span><span class="m_-7083455456326693402ticket-status" style="color: #4a4a4a; text-align: left; white-space: normal; background-color: #ffffff; line-height: 56px;">Confirmed</span></h1>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_image_1" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 60px;font-family:'Open Sans',sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
      
      <img align="center" border="0" src="https://cdn.templates.unlayer.com/assets/1675427250826-new.png" alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 66%;max-width: 382.8px;" width="382.8" class="v-src-width v-src-max-width"/>
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Open Sans',sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
      
      <img align="center" border="0" src="https://cdn.templates.unlayer.com/assets/1675406904547-Asset-4.png" alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 600px;" width="600" class="v-src-width v-src-max-width"/>
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

  </div>
  </div>
</div>
</td>
      </tr></table></td></tr></table>
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;">
      
<td align="center" width="600" class="v-col-border" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top">
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <div class="v-col-border" style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  
<table id="u_content_image_7" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 0px;font-family:'Open Sans',sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
      
      <img align="center" border="0" src="https://cdn.templates.unlayer.com/assets/1675406541171-Asset%202.png" alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 80%;max-width: 464px;" width="464" class="v-src-width v-src-max-width"/>
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

  </div>
  </div>
</div>
</td>
      </tr></table></td></tr></table>
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;">
      
<td align="center" width="200" class="v-col-border" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top">
<div id="u_column_3" class="u-col u-col-33p33" style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <div class="v-col-border" style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  
<table id="u_content_text_17" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px 20px;font-family:'Open Sans',sans-serif;" align="left">
        
  <div class="v-text-align v-line-height v-font-size" style="font-size: 16px; color: #22255e; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">Departure</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_heading_3" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 0px 20px;font-family:'Open Sans',sans-serif;" align="left">
        
  <h4 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #22255e; line-height: 100%; text-align: left; word-wrap: break-word; font-size: 16px; font-weight: 400;"><p><strong><br />${departureCity}<br /><br /></strong></p>
<p>${departureAirport}</p>
<p> </p></h4>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_text_9" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 10px 20px;font-family:'Open Sans',sans-serif;" align="left">
        
  <div class="v-text-align v-line-height v-font-size" style="font-size: 16px; color: #22255e; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">${departureTime}</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  </div>
  </div>
</div>
</td>
<td align="center" width="200" class="v-col-border" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top">
<div id="u_column_4" class="u-col u-col-33p33" style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <div class="v-col-border" style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  
<table id="u_content_image_5" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:37px 10px 10px;font-family:'Open Sans',sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
      
      <img align="center" border="0" src="https://cdn.templates.unlayer.com/assets/1675337480118-plane%20copy%204.png" alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 20%;max-width: 36px;" width="36" class="v-src-width v-src-max-width"/>
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

  </div>
  </div>
</div>
</td>
<td align="center" width="200" class="v-col-border" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top">
<div id="u_column_5" class="u-col u-col-33p33" style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <div class="v-col-border" style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  
<table id="u_content_text_3" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 20px 0px 10px;font-family:'Open Sans',sans-serif;" align="left">
        
  <div class="v-text-align v-line-height v-font-size" style="font-size: 16px; color: #22255e; line-height: 140%; text-align: right; word-wrap: break-word;">
    <p style="line-height: 140%;">Arrival</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_heading_5" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 20px 0px 10px;font-family:'Open Sans',sans-serif;" align="left">
        
  <h4 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #22255e; line-height: 100%; text-align: right; word-wrap: break-word; font-size: 16px; font-weight: 400;"><p><strong><br />${arrivalCity}</strong></p>
<p> </p>
<p>${arrivalAirport}<br /><br /></p></h4>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_text_10" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 20px 30px 10px;font-family:'Open Sans',sans-serif;" align="left">
        
  <div class="v-text-align v-line-height v-font-size" style="font-size: 16px; color: #22255e; line-height: 140%; text-align: right; word-wrap: break-word;">
    <p style="line-height: 140%;">${arrivalTime}</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  </div>
  </div>
</div>
</td>
      </tr></table></td></tr></table>
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;">
      
<td align="center" width="600" class="v-col-border" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top">
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <div class="v-col-border" style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  
<table id="u_content_heading_7" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:'Open Sans',sans-serif;" align="left">
        
  <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #22255e; line-height: 140%; text-align: center; word-wrap: break-word; font-family: 'Open Sans',sans-serif; font-size: 22px; font-weight: 400;"><strong>Your Trip Details</strong></h1>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_divider_2" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 0px 0px;font-family:'Open Sans',sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

  </div>
  </div>
</div>
</td>
      </tr></table></td></tr></table>
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;">
      
<td align="center" width="300" class="v-col-border" style="background-color: #ffffff;width: 300px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top">
<div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <div class="v-col-border" style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  
<table id="u_content_text_21" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 0px 20px;font-family:'Open Sans',sans-serif;" align="left">
        
  <div class="v-text-align v-line-height v-font-size" style="font-size: 16px; color: #22255e; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;"><strong>Name: ${name}<br /><br />Flight Number: ${flightNumber}</strong></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  </div>
  </div>
</div>
</td>
<td align="center" width="300" class="v-col-border" style="background-color: #ffffff;width: 300px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top">
<div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <div class="v-col-border" style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  
<table id="u_content_text_14" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 0px 20px;font-family:'Open Sans',sans-serif;" align="left">
        
  <div class="v-text-align v-line-height v-font-size" style="font-size: 16px; color: #22255e; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;"><strong>Passengers: ${passengerCount}<br /><br />Subtotal: ${totalPrice}</strong></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  </div>
  </div>
</div>
</td>
      </tr></table></td></tr></table>
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;">
      
<td align="center" width="600" class="v-col-border" style="background-color: #01a9da;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top">
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="background-color: #01a9da;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <div class="v-col-border" style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  
<table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 30px;font-family:'Open Sans',sans-serif;" align="left">
        
  <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">Reach out to us at: support@travelaero.com</p>
<p style="font-size: 14px; line-height: 140%;">+91 1234567800</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  </div>
  </div>
</div>
</td>
      </tr></table></td></tr></table>
    </div>
  </div>
  </div>
  


    </td></tr></table>
    </td>
  </tr>
  </tbody>
  </table>
  </div>
  </div>
</body>

</html>
`
return htmlTemplate;
}

module.exports=emailTemplate;

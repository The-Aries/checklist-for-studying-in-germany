"""Generate the editable, macro-free convenience CV with Python's standard library."""
from pathlib import Path
from xml.sax.saxutils import escape
from zipfile import ZipFile, ZIP_DEFLATED

ROOT = Path(__file__).resolve().parent.parent
def paragraph(text, bold=False):
    return '<w:p><w:r>' + ('<w:rPr><w:b/></w:rPr>' if bold else '') + '<w:t xml:space="preserve">' + escape(text) + '</w:t></w:r></w:p>'

body = paragraph('Post-Graduation Curriculum Vitae', True)
body += paragraph('Unofficial convenience template / 非 APS 官方模板。请始终以 APS 最新官方要求为准。', True)
body += paragraph('Full name: ________________________________________')
body += paragraph('Bachelor graduation date: __________________________')
body += paragraph('The graduation date is an orientation field for your timeline, not an APS-mandated form field.')
headers = ['Period (MM/YYYY–MM/YYYY)', 'Activity / Status', 'Institution / Employer / Location', 'Notes']
body += '<w:tbl><w:tblPr><w:tblW w:w="0" w:type="auto"/><w:tblBorders>'
body += ''.join(f'<w:{side} w:val="single" w:sz="4" w:color="808080"/>' for side in ['top','left','bottom','right','insideH','insideV'])
body += '</w:tblBorders></w:tblPr><w:tblGrid>' + '<w:gridCol w:w="2400"/>' * 4 + '</w:tblGrid>'
for index, cells in enumerate([headers] + [[''] * 4 for _ in range(7)]):
    body += '<w:tr><w:trPr>' + ('<w:tblHeader/>' if index == 0 else '<w:trHeight w:val="650" w:hRule="atLeast"/>') + '</w:trPr>'
    for cell in cells:
        body += '<w:tc><w:tcPr><w:tcW w:w="2400" w:type="dxa"/></w:tcPr>' + paragraph(cell, index == 0) + '</w:tc>'
    body += '</w:tr>'
body += '</w:tbl>'
for text in ['Complete the timeline from bachelor graduation to the present.', 'Use German or English. Add or delete rows as necessary.', 'Do not fabricate activities to fill gaps; describe periods truthfully.', 'This template is not an APS-issued form. Follow the latest official APS requirements.']:
    body += paragraph(text)
body += '<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1000" w:right="1000" w:bottom="1000" w:left="1000"/></w:sectPr>'
document = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>' + body + '</w:body></w:document>'
types = '<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>'
rels = '<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>'
target = ROOT / 'templates/aps-post-graduation-cv-template.docx'
target.parent.mkdir(exist_ok=True)
with ZipFile(target, 'w', ZIP_DEFLATED) as archive:
    for name, value in [('word/document.xml', document), ('[Content_Types].xml', types), ('_rels/.rels', rels)]:
        archive.writestr(name, value.encode('utf-8'))
print(target)

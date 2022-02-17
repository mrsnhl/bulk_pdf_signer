var fs = require('fs');

var { jsPDF } = require("jspdf");
var pdf = require('html-pdf');

var options = { format: 'Letter' };

function pvf_generator(name, sign, rollno) {

    try {
        var data = fs.readFileSync('Signed_PVF.html', 'utf8');
        stringData = data.toString();

        newStringData1 = stringData.replace('$$1', name);
        newStringData2 = newStringData1.replace('$$2', rollno);
        newStringData3 = newStringData2.replace('$$3', sign);

        pdf.create(newStringData3, options).toFile(name + '_' + rollno + '.pdf', function (err, res) {
            if (err) return console.log(err);
            console.log(res);
        })

        return newStringData3;

    } catch (e) {
        console.log('Error:', e.stack);
    }
}

pvfArray = [
    {
        name: 'Snehil',
        sign: 'SS',
        rollno: '170707'
    },
    {
        name: 'Sourabh',
        sign: 'SN',
        rollno: '170457'
    },
    {
        name: 'Utkarsh',
        sign: 'UV',
        rollno: '193207'
    }
]

pvfArray.map(pvf => pvf_generator(pvf.name, pvf.sign, pvf.rollno));

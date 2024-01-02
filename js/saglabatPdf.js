document.getElementById('save-pdf').addEventListener('click', function () {
    const doc = new jsPDF.jsPDF();
    const source = document.body.innerHTML;
    doc.fromHTML(source);
    doc.save('invoice.pdf');
});
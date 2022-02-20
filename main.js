var vendorItem;
var amountItem;
var branchItem;

function handleSubmit(e) {
  const numberGrn = document.getElementById("num").value;
  const date = document.getElementById("date").value;

  vendorItem = document.getElementById("vendor").value;
  amountItem = document.getElementById("amount").value;
  branchItem = document.getElementById("branch").value;

  const mybutton = document.getElementById("button");
  //   e.preventDefault();
  console.log(numberGrn);
  console.log(date);

  var table = document.querySelector("#mytable>tbody");
  var editbtn = document.getElementById("edit-btn");
  var deletebtn = document.getElementById("delete-btn");

  const x = moment(date).format("ll");
  var newRow = table.insertRow();
  newRow.insertCell(0).append(numberGrn);
  newRow.insertCell(1).append(x);
  newRow.insertCell(2).append(vendorItem);
  newRow.insertCell(2).append(amountItem);
  newRow.insertCell(4).append(branchItem);
  newRow.insertCell(5).append(editbtn, deletebtn);
  editbtn.classList.remove("edit-btn");
  deletebtn.classList.remove("delete-btn");
}

//delete function
function deleteRow(e) {
  var i = e.parentNode.parentNode.rowIndex;
  document.getElementById("mytable").deleteRow(i);
}

//editfunction

function editRow() {
  var table = document.getElementById("mytable"),
    rIndex;
  var editrow = document.getElementById("editrow");

  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      rIndex = this.rowIndex;
      console.log(rIndex);

      document.getElementById("num").value = this.cells[0].innerHTML;

      const m = moment(date).format("YYYY-MM-DD");
      console.log(m);
      m = this.cells[1].innerHTML;
      console.log("ggggggg", vendorItem, amountItem);
      vendorItem = this.cells[2].innerHTML;
      amountItem = this.cells[3].innerHTML;
      branchItem = this.cells[4].innerHTML;
    };
  }
}
function saveEditRow() {
  var rIndex;
  var table = document.getElementById("mytable");

  table.rows[rIndex].cells[0].innerHTML = numberGrn;
  //   table.rows[rIndex].cells[2].innerHTML = document.getElementById("num").value;
}

// var val = document.getElementById("v").value;
// var optionsvendor = document.getElementById("vendor").childNodes;

// var valAmount = document.getElementById("am").value;
// var optionsAmount = document.getElementById("amount").childNodes;

// var valBranch = document.getElementById("b").value;
// var optionsBranch = document.getElementById("branch").childNodes;

// for (i = 0; i < optionsvendor.length; i++) {
//   if (optionsvendor[i].value !== undefined) {
//     if (optionsvendor[i].value === val) {
//       vendorItem = optionsvendor[i].value;
//       console.log(vendorItem);
//     }
//   }
// }

// for (i = 0; i < optionsAmount.length; i++) {
//   if (optionsAmount[i].value !== undefined) {
//     if (optionsAmount[i].value === valAmount) {
//       amountItem = optionsAmount[i].value;
//       console.log(amountItem);
//     }
//   }
// }

// for (i = 0; i < optionsBranch.length; i++) {
//   if (optionsBranch[i].value !== undefined) {
//     if (optionsBranch[i].value === valBranch) {
//       branchItem = optionsBranch[i].value;
//       console.log(branchItem);
//     }
//   }
// }

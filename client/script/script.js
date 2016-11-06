$(document).ready(() => {
  $('#btn_update_memo').hide()
  submitNewMemo()
  showAllMemos()
})

let submitNewMemo = () => {
  $('#btn_new_memo').on('click', (e) => {
    e.preventDefault()
    let data_memo = {
      content : $('#content').val()
    }
    // console.log(data_memo);

    $.ajax({
      url         : 'http://localhost:3000/api/memos',
      type        : 'POST',
      dataType    : 'JSON',
      contentType : 'application/x-www-form-urlencoded',
      data        : data_memo,
      success      : (new_memo) => {
        console.log(new_memo);
      }
    })
    $('#form_new_memo')[0].reset()
  })
}

let showAllMemos = () => {
  $.ajax({
    url         : 'http://localhost:3000/api/memos',
    type        : 'GET',
    dataType    : 'JSON',
    contentType : 'application.x-www-form-urlencoded',
    success     : (all_memos) => {
      console.log(all_memos);
      let all_memos_HTML = ''
      for(var i = 0; i < all_memos.length; i++){
        all_memos_HTML += `<tr id=${all_memos[i]._id}>
        <td>${all_memos[i].content}</td>
        <td>
          <button type="button" class="btn btn-warning" id="edit_memo" onclick="submitEditButton('${all_memos[i]._id}')">Edit</button>
          <button type="button" class="btn btn-danger" id="delete_memo" onclick="submitDeleteButton('${all_memos[i]._id}')">Delete</button>
        </td>
        </tr>`
      }
      $('#body_table_memos').append(all_memos_HTML)
    }
  })
}

let submitEditButton = (id) => {
  $.ajax({
    url:  "http://localhost:3000/api/memos/"+id,
    method: 'PUT',
    contentType: 'application/x-www-form-urlencoded',
    success: (edited_memo) => {
      console.log(edited_memo)
      $('#content').val(edited_memo.content)
      console.log(edited_memo._id);

      let hidden_id = `
      <tr id="hidden_id">
        <td>
          <input type="hidden" id="id" value="${edited_memo._id}">
        </td>
      </tr>`

      $('#form_new_memo').append(hidden_id)

      $('#btn_add_memo').prop('disabled', true)
      $('#btn_update_memo').show()
      submitUpdateButton()
    }
  })
}

let submitUpdateButton = () => {
  $('#btn_update_memo').on('click', (e) => {
    e.preventDefault()
    let new_edit_memo = {
      _id : $('#id').val(),
      content : $('#content').val()
    }
    console.log('...................', new_edit_memo._id);
    $.ajax({
      url: "http://localhost:3000/api/memos/"+new_edit_memo._id,
      method: 'PUT',
      contentType: 'application/x-www-form-urlencoded',
      data : new_edit_memo,
      success: (new_edited_memo) => {
        console.log(new_edited_memo)
        let replace_row = `
        <tr id=${new_edited_memo._id}>
        <td>${new_edited_memo.content}</td>
        <td>
          <button type="button" class="btn btn-warning" id="edit_memo" onclick="submitEditButton('${new_edited_memo._id}')">Edit</button>
          <button type="button" class="btn btn-danger" id="delete_memo" onclick="submitDeleteButton('${new_edited_memo._id}')">Delete</button>
        </td>
        </tr>
        `
        $(`#${new_edited_memo._id}`).replaceWith(replace_row)
        $('#form_new_memo')[0].reset()
        $('#btn_update_memo').hide()
        $('#btn_add_memo').prop('disabled', false)
        $('#hidden_id').remove()
      }
    })
  })
}

let submitDeleteButton = (id) => {
  if(confirm('Are you sure want to delete?')){
    // alert(`yes`)
    $.ajax({
      url         : 'http://localhost:3000/api/memos/'+id,
      type        : 'DELETE',
      dataType    : 'json',
      contentType : 'application/x-www-form-urlencoded',
      success     : (deleted_memo) => {
        // console.log(deleted_memo);
        $(`#${deleted_memo._id}`).remove()
      }
    })

  }else{
    // alert(`no`)
    return false
  }
}

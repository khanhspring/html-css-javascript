## HTML form validation with JAVASCRIPT
---

### 1. HTML `<form>` elements

- input
- textarea
- select
- option
- label
- button

### 2. HTML input types

- text: mặc định, cho phép nhập các ký tự
- button: tạo submit button
- checkbox: tạo checkbox
- email: chỉ cho phép nhập email
- password: ô nhập mật khẩu, dữ liệu của input sẽ bị che đi ****
- number: chỉ cho phép nhập số
...

### 3. HTML input attributes

- readonly: không cho phép chỉnh sửa dữ liệu, ví dụ:
```
<input type="text" value="Hello" readonly />
```

- disable: không cho phép chỉnh sửa, highlight, tab, ví dụ:
```
<input type="text" value="Hello" disable />
```

- maxlength: số ký tự tối đa cho phép nhập, ví dụ:
```
<input type="text" maxlength="20" />
```

- min, max: (cho một số loại input type: number, range, date,...) giới hạn giá trị số có thể nhập, ví dụ:
```
<input type="number" min="1900" max="2020" />
```
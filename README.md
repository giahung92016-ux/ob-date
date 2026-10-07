# OB Date — Tuổi thai & BMI

Web tĩnh tiếng Việt, không cần máy chủ xử lý, không thu thập dữ liệu.

## Chạy trên GitHub Pages
1. Tạo repository public tên ob-date; bật Add README để có nhánh main.
2. Đưa các file trong thư mục này vào thư mục gốc repository (index.html phải nằm ở gốc).
3. Settings → Pages → Source: Deploy from a branch → main → /(root) → Save.
4. Mở URL GitHub Pages hiển thị trong Settings → Pages. Có thể cần đợi vài phút.
5. Mở bằng Chrome Android, bấm Cài đặt; nếu chưa hiện lời mời cài, menu ⋮ → Cài đặt ứng dụng / Thêm vào màn hình chính. iPhone: Safari → Chia sẻ → Thêm vào Màn hình chính.

## Phương pháp
- KCC: 280 ngày, có hiệu chỉnh chu kỳ đều 21–35 ngày.
- Ngày dự sinh đã biết hoặc tuổi thai ghi trên phiếu siêu âm.
- CRL 2–84 mm: Robinson–Fleming, ngày tuổi thai = round(8.052 × √CRL + 23.73). Kết quả công thức xấp xỉ có thể khác phần mềm siêu âm.
- MSD 2–25 mm: chỉ ước tính học tập, không dùng xác lập ngày dự sinh.
- IVF: ngày chuyển phôi + 266 − tuổi phôi; ngày thụ tinh/chọc hút + 266.
- BMI: WHO quốc tế cho người lớn, cân nặng trước thai kỳ nếu dùng trong sản khoa.

Ghi chú giữ mốc >9 ngày trong ảnh ở 16+0–21+6; ACOG là >10 ngày. Dòng cuối ảnh ghi 22+0 gây chồng lấn; web trình bày từ 28+0 và giải thích. Không tự động đổi ngày dự sinh.

Nguồn:
- https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date
- https://www.who.int/data/gho/data/themes/topics/indicator-groups/indicator-group-details/GHO/bmi-among-adults
- https://docs.github.com/en/pages/quickstart

Offline hoạt động sau lần tải thành công qua HTTPS/localhost. Mở index.html trực tiếp vẫn tính được, nhưng không đăng ký service worker hay cài PWA. Chỉ lưu chế độ giao diện; không lưu thông tin thai kỳ.

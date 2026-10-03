const customerName = "Tran Minh Duc";
const customerAge = 20;
const membershipTier = "GOLD";
const movieName = "Dune: Part Two";
const movieAgeRating = 16;
const seatTypeCode = 2;
const isWeekday = true;
const basePrice = 100000;

if (isNaN(basePrice) || basePrice <= 0 || isNaN(customerAge) || customerAge <= 0) {
  console.error("Gia ve hoac tuoi khach hang khong hop le!");
} else if (customerAge < movieAgeRating) {
  console.warn(`Khach hang ${customerName} chua du ${movieAgeRating} tuoi de xem phim ${movieName}!`);
} else {
  let seatTypeName = "";
  let seatSurcharge = 0;
  let isSeatValid = true;

  switch (seatTypeCode) {
    case 1:
      seatTypeName = "Standard";
      seatSurcharge = 0;
      break;
    case 2:
      seatTypeName = "VIP";
      seatSurcharge = 15000;
      break;
    case 3:
      seatTypeName = "Couple";
      seatSurcharge = 35000;
      break;
    default:
      console.error(`Ma loai ghe ${seatTypeCode} khong ton tai!`);
      isSeatValid = false;
  }

  if (isSeatValid) {
    let discountPercent = 0;
    let discountReason = "Khong ap dung";

    if (customerAge <= 12 || customerAge >= 60) {
      discountPercent = 30;
      discountReason = "Tre em / Nguoi cao tuoi";
    } else if (customerAge > 12 && customerAge <= 22 && isWeekday === true) {
      discountPercent = 20;
      discountReason = "Hoc sinh/Sinh vien ngay thuong";
    }

    let pointRate = 0;
    let membershipGift = "Khong co";

    switch (membershipTier) {
      case "DIAMOND":
        pointRate = 0.10;
        membershipGift = "Combo 1 Bap Rang + 2 Nuoc Ngot";
        break;
      case "GOLD":
        pointRate = 0.07;
        membershipGift = "1 Phan Nuoc Ngot Lon";
        break;
      case "SILVER":
        pointRate = 0.05;
        membershipGift = "Khong co";
        break;
      case "STANDARD":
        pointRate = 0.03;
        membershipGift = "Khong co";
        break;
      default:
        pointRate = 0;
        membershipGift = "Khong co";
    }

    const boardingLane = (membershipTier === "DIAMOND" || membershipTier === "GOLD")
      ? "Loi Vao Uu Tien"
      : "Loi Vao Tieu Chuan";

    const discountAmount = basePrice * (discountPercent / 100);
    const discountedTicketPrice = basePrice - discountAmount;
    const finalPayment = discountedTicketPrice + seatSurcharge;
    const rewardPoints = finalPayment * pointRate;

    const movieRatingText = movieAgeRating === 0 ? "P" : `C${movieAgeRating}`;
    const weekdayText = isWeekday ? "Ngay thuong (Thu 2 - Thu 6)" : "Cuoi tuan (Thu 7 - Chu Nhat)";

    console.log(`========================================
       HOA DON VE PHIM CINEMA
========================================
Khach hang          : ${customerName}
Do tuoi             : ${customerAge} tuoi
Hang thanh vien     : ${membershipTier}
Phim                : ${movieName} (Phan loai: ${movieRatingText})
Loai ghe            : ${seatTypeName}
Ngay chieu          : ${weekdayText}
----------------------------------------
Gia ve goc          : ${basePrice} VND
Muc giam gia        : ${discountPercent}% (${discountReason})
So tien duoc giam   : ${discountAmount} VND
Phu thu loai ghe    : ${seatSurcharge} VND
----------------------------------------
TONG THANH TOAN     : ${finalPayment} VND
----------------------------------------
QUYEN LOI CRM & DICH VU:
Qua tang kem        : ${membershipGift}
Diem thuong tich luy: ${rewardPoints} diem (Ty le: ${pointRate * 100}%)
Loi soat ve         : ${boardingLane}
========================================`);
  }
}
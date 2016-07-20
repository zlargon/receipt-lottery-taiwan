var ReceiptLottery = require('receipt-lottery-taiwan');

ReceiptLottery.query(function (err, info) {
  if (err) {
    console.error(err.stack);
    return;
  }

  console.log(JSON.stringify(info, null, 2));
});

// {
//   "new": {
//     "title": "105年03-04月",
//     "super": {
//       "name": "特別獎",
//       "description": "同期統一發票收執聯8位數號碼與上列號碼相同者獎金1,000 萬元",
//       "numbers": [
//         "18498950"
//       ]
//     },
//     "special": {
//       "name": "特獎",
//       "description": "同期統一發票收執聯8位數號碼與上列號碼相同者獎金200 萬元",
//       "numbers": [
//         "08513139"
//       ]
//     },
//     "first": {
//       "name": "頭獎",
//       "description": "同期統一發票收執聯8位數號碼與上列號碼相同者獎金20 萬元",
//       "numbers": [
//         "21881534",
//         "53050416",
//         "85174778"
//       ]
//     },
//     "second": {
//       "name": "二獎",
//       "description": "同期統一發票收執聯末7 位數號碼與頭獎中獎號碼末7 位相同者 各得獎金4 萬元",
//       "numbers": []
//     },
//     "thrid": {
//       "name": "三獎",
//       "description": "同期統一發票收執聯末6 位數號碼與頭獎中獎號碼末6 位相同者各得獎金1 萬元",
//       "numbers": []
//     },
//     "fourth": {
//       "name": "四獎",
//       "description": "同期統一發票收執聯末5 位數號碼與頭獎中獎號碼末5 位相同者各得獎金4 千元",
//       "numbers": []
//     },
//     "fifth": {
//       "name": "五獎",
//       "description": "同期統一發票收執聯末4 位數號碼與頭獎中獎號碼末4 位相同者各得獎金1 千元",
//       "numbers": []
//     },
//     "sixth": {
//       "name": "六獎",
//       "description": "同期統一發票收執聯末3 位數號碼與頭獎中獎號碼末3 位相同者各得獎金2 百元",
//       "numbers": []
//     },
//     "addtion": {
//       "name": "增開六獎",
//       "description": "同期統一發票收執聯末3 位數號碼與上列號碼相同者各得獎金2 百元",
//       "numbers": [
//         "086"
//       ]
//     }
//   },
//   "old": {
//     "title": "105年01-02月",
//     "super": {
//       "name": "特別獎",
//       "description": "同期統一發票收執聯8位數號碼與上列號碼相同者獎金1,000 萬元",
//       "numbers": [
//         "51730762"
//       ]
//     },
//     "special": {
//       "name": "特獎",
//       "description": "同期統一發票收執聯8位數號碼與上列號碼相同者獎金200 萬元",
//       "numbers": [
//         "67442563"
//       ]
//     },
//     "first": {
//       "name": "頭獎",
//       "description": "同期統一發票收執聯8位數號碼與上列號碼相同者獎金20 萬元",
//       "numbers": [
//         "11036956",
//         "55794786",
//         "62610317"
//       ]
//     },
//     "second": {
//       "name": "二獎",
//       "description": "同期統一發票收執聯末7 位數號碼與頭獎中獎號碼末7 位相同者各得獎金4 萬元",
//       "numbers": []
//     },
//     "thrid": {
//       "name": "三獎",
//       "description": "同期統一發票收執聯末6 位數號碼與頭獎中獎號碼末6 位相同者各得獎金1 萬元",
//       "numbers": []
//     },
//     "fourth": {
//       "name": "四獎",
//       "description": "同期統一發票收執聯末5 位數號碼與頭獎中獎號碼末5 位相同者各得獎金4 千元",
//       "numbers": []
//     },
//     "fifth": {
//       "name": "五獎",
//       "description": "同期統一發票收執聯末4 位數號碼與頭獎中獎號碼末4 位相同者各得獎金1 千元",
//       "numbers": []
//     },
//     "sixth": {
//       "name": "六獎",
//       "description": "同期統一發票收執聯末3 位數號碼與頭獎中獎號碼末3 位相同者各得獎金2 百元",
//       "numbers": []
//     },
//     "addtion": {
//       "name": "增開六獎",
//       "description": "同期統一發票收執聯末3 位數號碼與上列號碼相同者各得獎金2 百元",
//       "numbers": [
//         "079"
//       ]
//     }
//   }
// }

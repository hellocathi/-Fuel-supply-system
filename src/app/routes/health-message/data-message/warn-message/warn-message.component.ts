
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-warn-message',
  templateUrl: './warn-message.component.html',
  styles: []
})
export class WarnMessageComponent implements OnInit {

  constructor(private httpClient: HttpClient, ) {
  }

  ngOnInit() {
    this.listOfData = [
      {
        "id": "1",
        "warning_id": "1",
        "warning_code": "预警代码",
        "warning_name": "预警名称",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "2",
        "warning_id": "1",
        "warning_code": "预警代码",
        "warning_name": "预警名称",
        "device_id": "4",
        "device_code": "rycz_20200529_02_sb_01",
        "device_name": "神舟01燃油设备",
        "boat_id": "2",
        "boat_code": "rycz_20200529_01_sb_01",
        "boat_name": "神舟号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "3",
        "warning_id": "1",
        "warning_code": "预警代码",
        "warning_name": "预警名称",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 1,
        "is_delete": 0,
      },
      {
        "id": "4",
        "warning_id": "1",
        "warning_code": "预警代码",
        "warning_name": "预警名称",
        "device_id": "4",
        "device_code": "rycz_20200529_02_sb_01",
        "device_name": "神舟01燃油设备",
        "boat_id": "2",
        "boat_code": "rycz_20200529_01_sb_01",
        "boat_name": "神舟号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 1,
        "is_delete": 0,
      },
      {
        "id": "5",
        "warning_id": "1",
        "warning_code": "预警代码",
        "warning_name": "预警名称",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 1,
        "is_delete": 0,
      },
      {
        "id": "6",
        "warning_id": "1",
        "warning_code": "预警代码",
        "warning_name": "预警名称",
        "device_id": "4",
        "device_code": "rycz_20200529_02_sb_01",
        "device_name": "神舟01燃油设备",
        "boat_id": "2",
        "boat_code": "rycz_20200529_01_sb_01",
        "boat_name": "神舟号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 1,
        "is_delete": 0,
      },
      {
        "id": "7",
        "warning_id": "1",
        "warning_code": "预警代码",
        "warning_name": "预警名称",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 1,
        "is_delete": 0,
      },
      {
        "id": "8",
        "warning_id": "1",
        "warning_code": "预警代码",
        "warning_name": "预警名称",
        "device_id": "4",
        "device_code": "rycz_20200529_02_sb_01",
        "device_name": "神舟01燃油设备",
        "boat_id": "2",
        "boat_code": "rycz_20200529_01_sb_01",
        "boat_name": "神舟号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 1,
        "is_delete": 0,
      },
      {
        "id": "9",
        "warning_id": "1",
        "warning_code": "预警代码",
        "warning_name": "预警名称",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 1,
        "is_delete": 0,
      },
      {
        "id": "10",
        "warning_id": "1",
        "warning_code": "预警代码",
        "warning_name": "预警名称",
        "device_id": "4",
        "device_code": "rycz_20200529_02_sb_01",
        "device_name": "神舟01燃油设备",
        "boat_id": "2",
        "boat_code": "rycz_20200529_01_sb_01",
        "boat_name": "神舟号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 1,
        "is_delete": 0,
      },
    ];
    this.listOfDisplayData = this.listOfData.map((data) => {

      if (data.is_deal == 0) {
        data.is_deal_over = "否";
        data.is_deal_button = false;
        return data;
      }
      if (data.is_deal == 1) {
        data.is_deal_over = "是";
        data.is_deal_button = true;
        return data;
      }

    });
    //this.warningRecordList(null,null,null,null);
  }
  public listOfData: Array<any>;
  public listOfDisplayData;
  public selectedValue = null;
  public inputValue = null;
  public sort_key = null;
  public sort_value = null;
  public err;


  warningRecordList(find_key: string, find_vaule: string, sort_key: string, sort_value: string) {
    const url: string = '/api/get/warning/all/information';
    let params = new HttpParams();
    params = params.append('find_key', find_key).append('find_vaule', find_vaule).append('sort_key', sort_key).append('sort_value', sort_value);
    return this.httpClient.get(url, { params })
      .toPromise()
      .then(data => {
        this.listOfData = data['data']['warningRecordList'];
        this.listOfDisplayData = this.listOfData.map((data) => {
          if (data.is_deal == 0) {
            data.is_deal_over = "否";
            data.is_deal_button = false;
            return data;
          }
          if (data.is_deal == 1) {
            data.is_deal_over = "是";
            data.is_deal_button = true;
            return data;
          }

        });
      })
      .catch(this.err);
  }
  dealapi(id: number) {
    const url: string = '/api/warning/deal/function';
    return this.httpClient.post(url, { id: id })
      .toPromise()
      .then(data => {

      })
      .catch(this.err);
  }
  search() {
    this.warningRecordList(this.selectedValue, this.inputValue, null, null);

  }
  sort(info) {
    this.sort_key = info.key;
    this.sort_value = info.value;
    this.warningRecordList(this.selectedValue, this.inputValue, this.sort_key, this.sort_value);
  }
  deal(id) {
    this.dealapi(id);
    this.warningRecordList(this.selectedValue, this.inputValue, this.sort_key, this.sort_value);
  }
}

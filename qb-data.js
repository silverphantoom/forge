// Real QuickBooks data for Red Clay Garage Services
// Auto-synced 2026-02-16
window.QB_DATA = {
  "invoices": [
    {
      "AllowIPNPayment": false,
      "AllowOnlinePayment": false,
      "AllowOnlineCreditCardPayment": true,
      "AllowOnlineACHPayment": true,
      "EInvoiceStatus": "Paid",
      "domain": "QBO",
      "sparse": false,
      "Id": "525",
      "SyncToken": "2",
      "MetaData": {
        "CreateTime": "2026-02-10T09:02:11-08:00",
        "LastModifiedByRef": {
          "value": "0"
        },
        "LastUpdatedTime": "2026-02-10T09:08:24-08:00"
      },
      "CustomField": [],
      "DocNumber": "1027",
      "TxnDate": "2026-02-10",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "LinkedTxn": [
        {
          "TxnId": "526",
          "TxnType": "Payment"
        }
      ],
      "Line": [
        {
          "Id": "1",
          "LineNum": 1,
          "Description": "Full Door Service",
          "Amount": 250.0,
          "DetailType": "SalesItemLineDetail",
          "SalesItemLineDetail": {
            "ItemRef": {
              "value": "1",
              "name": "Services"
            },
            "UnitPrice": 250,
            "ItemAccountRef": {
              "value": "6",
              "name": "Services"
            },
            "TaxCodeRef": {
              "value": "NON"
            },
            "TaxClassificationRef": {}
          },
          "CustomExtensions": []
        },
        {
          "Id": "2",
          "LineNum": 2,
          "Description": "2.99% convenience fee applies when using a credit card. Not applicable to debit, ACH, cash, or check payments.",
          "Amount": 7.5,
          "DetailType": "SalesItemLineDetail",
          "SalesItemLineDetail": {
            "ItemRef": {
              "value": "14",
              "name": "Convenience Fee (Credit Card Payments Only)"
            },
            "UnitPrice": 7.5,
            "ItemAccountRef": {
              "value": "111",
              "name": "QuickBooks Payments Sales"
            },
            "TaxCodeRef": {
              "value": "NON"
            },
            "TaxClassificationRef": {}
          },
          "CustomExtensions": []
        },
        {
          "Amount": 257.5,
          "DetailType": "SubTotalLineDetail",
          "SubTotalLineDetail": {}
        }
      ],
      "TxnTaxDetail": {
        "TxnTaxCodeRef": {
          "value": "3"
        },
        "TotalTax": 0,
        "TaxLine": [
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "3"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "5"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "4"
              },
              "PercentBased": true,
              "TaxPercent": 1,
              "NetAmountTaxable": 0
            }
          }
        ]
      },
      "CustomerRef": {
        "value": "75",
        "name": "Wendy Warren"
      },
      "BillAddr": {
        "Id": "88",
        "Line1": "Wendy Warren",
        "Line2": "1919 Locke Ct"
      },
      "ShipAddr": {
        "Id": "89",
        "Line1": "Wendy Warren",
        "Line2": "1919 Locke Ct"
      },
      "FreeFormAddress": true,
      "DueDate": "2026-03-12",
      "TotalAmt": 257.5,
      "ApplyTaxAfterDiscount": false,
      "PrintStatus": "NotSet",
      "EmailStatus": "EmailSent",
      "BillEmail": {
        "Address": "wawarren1919@gmail.com"
      },
      "Balance": 0,
      "DeliveryInfo": {
        "DeliveryType": "Email",
        "DeliveryTime": "2026-02-10T09:02:43-08:00"
      },
      "TaxExemptionRef": {}
    },
    {
      "AllowIPNPayment": false,
      "AllowOnlinePayment": false,
      "AllowOnlineCreditCardPayment": true,
      "AllowOnlineACHPayment": true,
      "domain": "QBO",
      "sparse": false,
      "Id": "513",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-20T14:26:24-08:00",
        "LastModifiedByRef": {
          "value": "9341456054796012"
        },
        "LastUpdatedTime": "2026-02-04T11:37:56-08:00"
      },
      "CustomField": [],
      "DocNumber": "1026",
      "TxnDate": "2026-01-20",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "LinkedTxn": [
        {
          "TxnId": "514",
          "TxnType": "Payment"
        }
      ],
      "Line": [
        {
          "Id": "1",
          "LineNum": 1,
          "Description": "Full door service: $349\nFirst-Time Neighborhood Credit: -$99",
          "Amount": 250.0,
          "DetailType": "SalesItemLineDetail",
          "SalesItemLineDetail": {
            "ItemRef": {
              "value": "1",
              "name": "Services"
            },
            "UnitPrice": 250,
            "ItemAccountRef": {
              "value": "6",
              "name": "Services"
            },
            "TaxCodeRef": {
              "value": "NON"
            },
            "TaxClassificationRef": {}
          },
          "CustomExtensions": []
        },
        {
          "Amount": 250.0,
          "DetailType": "SubTotalLineDetail",
          "SubTotalLineDetail": {}
        }
      ],
      "TxnTaxDetail": {
        "TxnTaxCodeRef": {
          "value": "3"
        },
        "TotalTax": 0,
        "TaxLine": [
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "3"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "5"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "4"
              },
              "PercentBased": true,
              "TaxPercent": 1,
              "NetAmountTaxable": 0
            }
          }
        ]
      },
      "CustomerRef": {
        "value": "72",
        "name": "Jaime Felipe"
      },
      "BillAddr": {
        "Id": "85",
        "Line1": "Jaime Felipe",
        "Line2": "437 Stanfield Dr",
        "Line3": "Auburn AL"
      },
      "ShipAddr": {
        "Id": "86",
        "Line1": "Jaime Felipe",
        "Line2": "437 Stanfield Dr",
        "Line3": "Auburn AL"
      },
      "FreeFormAddress": true,
      "DueDate": "2026-02-19",
      "TotalAmt": 250.0,
      "ApplyTaxAfterDiscount": false,
      "PrintStatus": "NotSet",
      "EmailStatus": "NotSet",
      "Balance": 0,
      "TaxExemptionRef": {}
    },
    {
      "AllowIPNPayment": false,
      "AllowOnlinePayment": false,
      "AllowOnlineCreditCardPayment": true,
      "AllowOnlineACHPayment": true,
      "domain": "QBO",
      "sparse": false,
      "Id": "510",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-18T21:55:00-08:00",
        "LastModifiedByRef": {
          "value": "9341456054796012"
        },
        "LastUpdatedTime": "2026-02-04T11:37:59-08:00"
      },
      "CustomField": [],
      "DocNumber": "1025",
      "TxnDate": "2026-01-18",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "LinkedTxn": [
        {
          "TxnId": "515",
          "TxnType": "Payment"
        }
      ],
      "Line": [
        {
          "Id": "1",
          "LineNum": 1,
          "Description": "Double Torsion Spring Replacement (Labor)",
          "Amount": 390.0,
          "DetailType": "SalesItemLineDetail",
          "SalesItemLineDetail": {
            "ItemRef": {
              "value": "1",
              "name": "Services"
            },
            "UnitPrice": 390,
            "ItemAccountRef": {
              "value": "6",
              "name": "Services"
            },
            "TaxCodeRef": {
              "value": "NON"
            },
            "TaxClassificationRef": {}
          },
          "CustomExtensions": []
        },
        {
          "Amount": 390.0,
          "DetailType": "SubTotalLineDetail",
          "SubTotalLineDetail": {}
        }
      ],
      "TxnTaxDetail": {
        "TxnTaxCodeRef": {
          "value": "3"
        },
        "TotalTax": 0,
        "TaxLine": [
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "3"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "5"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "4"
              },
              "PercentBased": true,
              "TaxPercent": 1,
              "NetAmountTaxable": 0
            }
          }
        ]
      },
      "CustomerRef": {
        "value": "71",
        "name": "Connor Dunn"
      },
      "BillAddr": {
        "Id": "82",
        "Line1": "Connor Dunn",
        "Line2": "1813 Roanoke ln.",
        "Line3": "Auburn AL"
      },
      "ShipAddr": {
        "Id": "83",
        "Line1": "Connor Dunn",
        "Line2": "1813 Roanoke ln.",
        "Line3": "Auburn AL"
      },
      "FreeFormAddress": true,
      "DueDate": "2026-02-17",
      "TotalAmt": 390.0,
      "ApplyTaxAfterDiscount": false,
      "PrintStatus": "NotSet",
      "EmailStatus": "NotSet",
      "Balance": 0,
      "TaxExemptionRef": {}
    },
    {
      "AllowIPNPayment": false,
      "AllowOnlinePayment": false,
      "AllowOnlineCreditCardPayment": true,
      "AllowOnlineACHPayment": true,
      "domain": "QBO",
      "sparse": false,
      "Id": "198",
      "SyncToken": "2",
      "MetaData": {
        "CreateTime": "2025-12-11T12:57:34-08:00",
        "LastModifiedByRef": {
          "value": "9341456054796012"
        },
        "LastUpdatedTime": "2026-01-14T14:15:21-08:00"
      },
      "CustomField": [],
      "DocNumber": "1021",
      "TxnDate": "2025-12-11",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "LinkedTxn": [
        {
          "TxnId": "199",
          "TxnType": "Payment"
        }
      ],
      "Line": [
        {
          "Id": "5",
          "LineNum": 1,
          "Description": "Torsion Spring Replacement & Install",
          "Amount": 379.0,
          "DetailType": "SalesItemLineDetail",
          "SalesItemLineDetail": {
            "ItemRef": {
              "value": "1",
              "name": "Services"
            },
            "UnitPrice": 379,
            "Qty": 1,
            "ItemAccountRef": {
              "value": "6",
              "name": "Services"
            },
            "TaxCodeRef": {
              "value": "NON"
            },
            "TaxClassificationRef": {}
          },
          "CustomExtensions": []
        },
        {
          "Amount": 379.0,
          "DetailType": "SubTotalLineDetail",
          "SubTotalLineDetail": {}
        }
      ],
      "TxnTaxDetail": {
        "TxnTaxCodeRef": {
          "value": "3"
        },
        "TotalTax": 0,
        "TaxLine": [
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "3"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "4"
              },
              "PercentBased": true,
              "TaxPercent": 1,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "5"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          }
        ]
      },
      "CustomerRef": {
        "value": "48",
        "name": "Buddy Coburn"
      },
      "BillAddr": {
        "Id": "74",
        "Line1": "Buddy Coburn"
      },
      "FreeFormAddress": false,
      "SalesTermRef": {
        "value": "3",
        "name": "Net 30"
      },
      "DueDate": "2026-01-10",
      "TotalAmt": 379.0,
      "ApplyTaxAfterDiscount": false,
      "PrintStatus": "NotSet",
      "EmailStatus": "NotSet",
      "Balance": 0,
      "TaxExemptionRef": {}
    },
    {
      "AllowIPNPayment": false,
      "AllowOnlinePayment": false,
      "AllowOnlineCreditCardPayment": true,
      "AllowOnlineACHPayment": true,
      "domain": "QBO",
      "sparse": false,
      "Id": "493",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-12T06:52:38-08:00",
        "LastModifiedByRef": {
          "value": "9341456054796012"
        },
        "LastUpdatedTime": "2026-01-12T06:52:42-08:00"
      },
      "CustomField": [],
      "DocNumber": "1024",
      "TxnDate": "2025-12-01",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "LinkedTxn": [
        {
          "TxnId": "494",
          "TxnType": "Payment"
        }
      ],
      "Line": [
        {
          "Id": "1",
          "LineNum": 1,
          "Amount": 190.0,
          "DetailType": "SalesItemLineDetail",
          "SalesItemLineDetail": {
            "ItemRef": {
              "value": "1",
              "name": "Services"
            },
            "UnitPrice": 190,
            "Qty": 1,
            "ItemAccountRef": {
              "value": "6",
              "name": "Services"
            },
            "TaxCodeRef": {
              "value": "NON"
            },
            "TaxClassificationRef": {}
          },
          "CustomExtensions": []
        },
        {
          "Amount": 190.0,
          "DetailType": "SubTotalLineDetail",
          "SubTotalLineDetail": {}
        }
      ],
      "TxnTaxDetail": {
        "TxnTaxCodeRef": {
          "value": "3"
        },
        "TotalTax": 0,
        "TaxLine": [
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "3"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "4"
              },
              "PercentBased": true,
              "TaxPercent": 1,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "5"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          }
        ]
      },
      "CustomerRef": {
        "value": "69",
        "name": "Marian Harper"
      },
      "BillAddr": {
        "Id": "72",
        "Line1": "Marian Harper",
        "Line2": "Marian Harper"
      },
      "ShipAddr": {
        "Id": "71"
      },
      "FreeFormAddress": true,
      "SalesTermRef": {
        "value": "1",
        "name": "Due on receipt"
      },
      "DueDate": "2025-12-01",
      "TotalAmt": 190.0,
      "ApplyTaxAfterDiscount": false,
      "PrintStatus": "NotSet",
      "EmailStatus": "NotSet",
      "Balance": 0,
      "TaxExemptionRef": {}
    },
    {
      "AllowIPNPayment": false,
      "AllowOnlinePayment": false,
      "AllowOnlineCreditCardPayment": true,
      "AllowOnlineACHPayment": true,
      "EInvoiceStatus": "Sent",
      "domain": "QBO",
      "sparse": false,
      "Id": "192",
      "SyncToken": "5",
      "MetaData": {
        "CreateTime": "2025-11-18T15:08:40-08:00",
        "LastModifiedByRef": {
          "value": "9341456054796012"
        },
        "LastUpdatedTime": "2026-01-09T11:20:11-08:00"
      },
      "CustomField": [],
      "DocNumber": "1019",
      "TxnDate": "2025-11-18",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "LinkedTxn": [
        {
          "TxnId": "193",
          "TxnType": "Payment"
        }
      ],
      "Line": [
        {
          "Id": "1",
          "LineNum": 1,
          "Amount": 150.0,
          "DetailType": "SalesItemLineDetail",
          "SalesItemLineDetail": {
            "ItemRef": {
              "value": "13",
              "name": "Hinge+Roller Replacement"
            },
            "UnitPrice": 150,
            "Qty": 1,
            "ItemAccountRef": {
              "value": "6",
              "name": "Services"
            },
            "TaxCodeRef": {
              "value": "NON"
            },
            "TaxClassificationRef": {}
          },
          "CustomExtensions": []
        },
        {
          "Id": "2",
          "LineNum": 2,
          "Amount": 100.0,
          "DetailType": "SalesItemLineDetail",
          "SalesItemLineDetail": {
            "ItemRef": {
              "value": "12",
              "name": "Strut (Part+Installation)"
            },
            "UnitPrice": 100,
            "Qty": 1,
            "ItemAccountRef": {
              "value": "6",
              "name": "Services"
            },
            "TaxCodeRef": {
              "value": "NON"
            },
            "TaxClassificationRef": {}
          },
          "CustomExtensions": []
        },
        {
          "Id": "7",
          "LineNum": 3,
          "Amount": 7.48,
          "DetailType": "SalesItemLineDetail",
          "SalesItemLineDetail": {
            "ItemRef": {
              "value": "1",
              "name": "Services"
            },
            "UnitPrice": 7.475,
            "Qty": 1,
            "ItemAccountRef": {
              "value": "6",
              "name": "Services"
            },
            "TaxCodeRef": {
              "value": "NON"
            },
            "TaxClassificationRef": {}
          },
          "CustomExtensions": []
        },
        {
          "Amount": 257.48,
          "DetailType": "SubTotalLineDetail",
          "SubTotalLineDetail": {}
        }
      ],
      "TxnTaxDetail": {
        "TxnTaxCodeRef": {
          "value": "5"
        },
        "TotalTax": 0,
        "TaxLine": [
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "3"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "7"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          }
        ]
      },
      "CustomerRef": {
        "value": "45",
        "name": "Keith Cooper"
      },
      "BillAddr": {
        "Id": "55",
        "Line1": "Keith Cooper",
        "Line2": "6433 CR-166",
        "Line3": "Opelika",
        "Line4": "AL",
        "Line5": "36804"
      },
      "ShipAddr": {
        "Id": "56",
        "Line1": "Keith Cooper",
        "Line2": "6433 CR-166",
        "Line3": "Opelika",
        "Line4": "AL",
        "Line5": "36804"
      },
      "FreeFormAddress": true,
      "DueDate": "2025-12-18",
      "TotalAmt": 257.48,
      "ApplyTaxAfterDiscount": false,
      "PrintStatus": "NotSet",
      "EmailStatus": "EmailSent",
      "BillEmail": {
        "Address": "cooperkall@yahoo.com"
      },
      "Balance": 0,
      "DeliveryInfo": {
        "DeliveryType": "Email",
        "DeliveryTime": "2025-11-18T16:18:35-08:00"
      },
      "TaxExemptionRef": {}
    },
    {
      "AllowIPNPayment": false,
      "AllowOnlinePayment": false,
      "AllowOnlineCreditCardPayment": true,
      "AllowOnlineACHPayment": true,
      "domain": "QBO",
      "sparse": false,
      "Id": "186",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2025-11-14T14:30:02-08:00",
        "LastModifiedByRef": {
          "value": "9341454855461924"
        },
        "LastUpdatedTime": "2025-11-14T14:39:33-08:00"
      },
      "CustomField": [],
      "DocNumber": "1016",
      "TxnDate": "2025-11-14",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "LinkedTxn": [
        {
          "TxnId": "188",
          "TxnType": "Payment"
        }
      ],
      "Line": [
        {
          "Id": "1",
          "LineNum": 1,
          "Amount": 349.0,
          "DetailType": "SalesItemLineDetail",
          "SalesItemLineDetail": {
            "ItemRef": {
              "value": "5",
              "name": "Full Door Service"
            },
            "UnitPrice": 349,
            "Qty": 1,
            "ItemAccountRef": {
              "value": "6",
              "name": "Services"
            },
            "TaxCodeRef": {
              "value": "NON"
            },
            "TaxClassificationRef": {}
          },
          "CustomExtensions": []
        },
        {
          "Amount": 349.0,
          "DetailType": "SubTotalLineDetail",
          "SubTotalLineDetail": {}
        }
      ],
      "TxnTaxDetail": {
        "TxnTaxCodeRef": {
          "value": "3"
        },
        "TotalTax": 0,
        "TaxLine": [
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "3"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "5"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "4"
              },
              "PercentBased": true,
              "TaxPercent": 1,
              "NetAmountTaxable": 0
            }
          }
        ]
      },
      "CustomerRef": {
        "value": "47",
        "name": "Russell Suther"
      },
      "BillAddr": {
        "Id": "48",
        "Line1": "Russell Suther",
        "Line2": "2145 Preserve Dr",
        "Line3": "Auburn"
      },
      "FreeFormAddress": false,
      "DueDate": "2025-12-14",
      "TotalAmt": 349.0,
      "ApplyTaxAfterDiscount": false,
      "PrintStatus": "NotSet",
      "EmailStatus": "NotSet",
      "BillEmail": {
        "Address": "badtolz57@gmail.com"
      },
      "Balance": 0,
      "TaxExemptionRef": {}
    },
    {
      "AllowIPNPayment": false,
      "AllowOnlinePayment": false,
      "AllowOnlineCreditCardPayment": true,
      "AllowOnlineACHPayment": true,
      "domain": "QBO",
      "sparse": false,
      "Id": "175",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2025-10-09T15:33:56-07:00",
        "LastModifiedByRef": {
          "value": "9341454855461924"
        },
        "LastUpdatedTime": "2025-10-09T15:34:42-07:00"
      },
      "CustomField": [],
      "DocNumber": "1010",
      "TxnDate": "2025-10-09",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "LinkedTxn": [
        {
          "TxnId": "176",
          "TxnType": "Payment"
        }
      ],
      "Line": [
        {
          "Id": "1",
          "LineNum": 1,
          "Amount": 50.0,
          "DetailType": "SalesItemLineDetail",
          "SalesItemLineDetail": {
            "ItemRef": {
              "value": "11",
              "name": "Sensor Adjustment"
            },
            "UnitPrice": 50,
            "Qty": 1,
            "ItemAccountRef": {
              "value": "6",
              "name": "Services"
            },
            "TaxCodeRef": {
              "value": "NON"
            },
            "TaxClassificationRef": {}
          },
          "CustomExtensions": []
        },
        {
          "Amount": 50.0,
          "DetailType": "SubTotalLineDetail",
          "SubTotalLineDetail": {}
        }
      ],
      "TxnTaxDetail": {
        "TxnTaxCodeRef": {
          "value": "5"
        },
        "TotalTax": 0,
        "TaxLine": [
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "3"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "7"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          }
        ]
      },
      "CustomerRef": {
        "value": "43",
        "name": "Bee Jackson"
      },
      "BillAddr": {
        "Id": "28",
        "Line1": "Bee Jackson",
        "Line2": "1018 Lee Rd 61",
        "Line3": "Auburn AL 36832"
      },
      "ShipAddr": {
        "Id": "29",
        "Line1": "Bee Jackson",
        "Line2": "1018 Lee Rd 61",
        "Line3": "Auburn AL 36832"
      },
      "FreeFormAddress": true,
      "DueDate": "2025-11-08",
      "TotalAmt": 50.0,
      "ApplyTaxAfterDiscount": false,
      "PrintStatus": "NotSet",
      "EmailStatus": "NotSet",
      "BillEmail": {
        "Address": "Tinasjackson47@gmail.com"
      },
      "Balance": 0,
      "TaxExemptionRef": {}
    },
    {
      "AllowIPNPayment": false,
      "AllowOnlinePayment": false,
      "AllowOnlineCreditCardPayment": true,
      "AllowOnlineACHPayment": true,
      "EInvoiceStatus": "Viewed",
      "domain": "QBO",
      "sparse": false,
      "Id": "170",
      "SyncToken": "4",
      "MetaData": {
        "CreateTime": "2025-09-30T14:42:38-07:00",
        "LastModifiedByRef": {
          "value": "9341454855461924"
        },
        "LastUpdatedTime": "2025-10-09T14:01:37-07:00"
      },
      "CustomField": [],
      "DocNumber": "1008",
      "TxnDate": "2025-09-30",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "LinkedTxn": [
        {
          "TxnId": "44",
          "TxnType": "Estimate"
        },
        {
          "TxnId": "174",
          "TxnType": "Payment"
        },
        {
          "TxnId": "45",
          "TxnType": "Payment"
        }
      ],
      "Line": [
        {
          "Id": "1",
          "LineNum": 1,
          "Amount": 350.0,
          "LinkedTxn": [
            {
              "TxnId": "44",
              "TxnType": "Estimate"
            }
          ],
          "DetailType": "SalesItemLineDetail",
          "SalesItemLineDetail": {
            "ItemRef": {
              "value": "9",
              "name": "Full Door Service & Spring Replacement"
            },
            "UnitPrice": 350,
            "Qty": 1,
            "ItemAccountRef": {
              "value": "6",
              "name": "Services"
            },
            "TaxCodeRef": {
              "value": "NON"
            },
            "TaxClassificationRef": {}
          },
          "CustomExtensions": []
        },
        {
          "Amount": 350.0,
          "DetailType": "SubTotalLineDetail",
          "SubTotalLineDetail": {}
        }
      ],
      "TxnTaxDetail": {
        "TxnTaxCodeRef": {
          "value": "3"
        },
        "TotalTax": 0,
        "TaxLine": [
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "3"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "4"
              },
              "PercentBased": true,
              "TaxPercent": 1,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "5"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          }
        ]
      },
      "CustomerRef": {
        "value": "40",
        "name": "Nagaraj"
      },
      "BillAddr": {
        "Id": "19",
        "Line1": "Nagaraj",
        "Line2": "1603 Ella Grace Dr"
      },
      "ShipAddr": {
        "Id": "20",
        "Line1": "Nagaraj",
        "Line2": "1603 Ella Grace Dr"
      },
      "FreeFormAddress": true,
      "SalesTermRef": {
        "value": "3",
        "name": "Net 30"
      },
      "DueDate": "2025-10-30",
      "TotalAmt": 350.0,
      "ApplyTaxAfterDiscount": false,
      "PrintStatus": "NotSet",
      "EmailStatus": "EmailSent",
      "BillEmail": {
        "Address": "Ejantkar@yahoo.com"
      },
      "Balance": 0,
      "DeliveryInfo": {
        "DeliveryType": "Email",
        "DeliveryTime": "2025-10-09T13:58:36-07:00"
      },
      "TaxExemptionRef": {}
    },
    {
      "AllowIPNPayment": false,
      "AllowOnlinePayment": false,
      "AllowOnlineCreditCardPayment": true,
      "AllowOnlineACHPayment": true,
      "EInvoiceStatus": "Paid",
      "domain": "QBO",
      "sparse": false,
      "Id": "41",
      "SyncToken": "2",
      "MetaData": {
        "CreateTime": "2025-07-17T13:44:54-07:00",
        "LastModifiedByRef": {
          "value": "0"
        },
        "LastUpdatedTime": "2025-07-21T12:51:25-07:00"
      },
      "CustomField": [],
      "DocNumber": "1007",
      "TxnDate": "2025-07-17",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "LinkedTxn": [
        {
          "TxnId": "42",
          "TxnType": "Payment"
        }
      ],
      "Line": [
        {
          "Id": "1",
          "LineNum": 1,
          "Amount": 349.0,
          "DetailType": "SalesItemLineDetail",
          "SalesItemLineDetail": {
            "ItemRef": {
              "value": "5",
              "name": "Full Door Service"
            },
            "UnitPrice": 349,
            "Qty": 1,
            "ItemAccountRef": {
              "value": "6",
              "name": "Services"
            },
            "TaxCodeRef": {
              "value": "NON"
            },
            "TaxClassificationRef": {}
          },
          "CustomExtensions": []
        },
        {
          "Id": "2",
          "LineNum": 2,
          "Amount": 650.0,
          "DetailType": "SalesItemLineDetail",
          "SalesItemLineDetail": {
            "ItemRef": {
              "value": "6",
              "name": "Opener Replacement & Installation"
            },
            "UnitPrice": 650,
            "Qty": 1,
            "ItemAccountRef": {
              "value": "6",
              "name": "Services"
            },
            "TaxCodeRef": {
              "value": "NON"
            },
            "TaxClassificationRef": {}
          },
          "CustomExtensions": []
        },
        {
          "Id": "3",
          "LineNum": 3,
          "Amount": 200.0,
          "DetailType": "SalesItemLineDetail",
          "SalesItemLineDetail": {
            "ItemRef": {
              "value": "7",
              "name": "Weather Stripping"
            },
            "UnitPrice": 200,
            "Qty": 1,
            "ItemAccountRef": {
              "value": "6",
              "name": "Services"
            },
            "TaxCodeRef": {
              "value": "NON"
            },
            "TaxClassificationRef": {}
          },
          "CustomExtensions": []
        },
        {
          "Amount": 1199.0,
          "DetailType": "SubTotalLineDetail",
          "SubTotalLineDetail": {}
        }
      ],
      "TxnTaxDetail": {
        "TxnTaxCodeRef": {
          "value": "3"
        },
        "TotalTax": 0,
        "TaxLine": [
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "3"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "4"
              },
              "PercentBased": true,
              "TaxPercent": 1,
              "NetAmountTaxable": 0
            }
          },
          {
            "Amount": 0,
            "DetailType": "TaxLineDetail",
            "TaxLineDetail": {
              "TaxRateRef": {
                "value": "5"
              },
              "PercentBased": true,
              "TaxPercent": 4,
              "NetAmountTaxable": 0
            }
          }
        ]
      },
      "CustomerRef": {
        "value": "38",
        "name": "Rick Elm"
      },
      "BillAddr": {
        "Id": "14",
        "Line1": "603 Owens Rd"
      },
      "ShipAddr": {
        "Id": "14",
        "Line1": "603 Owens Rd"
      },
      "FreeFormAddress": true,
      "SalesTermRef": {
        "value": "3",
        "name": "Net 30"
      },
      "DueDate": "2025-08-16",
      "TotalAmt": 1199.0,
      "ApplyTaxAfterDiscount": false,
      "PrintStatus": "NotSet",
      "EmailStatus": "EmailSent",
      "BillEmail": {
        "Address": "Elms0411@gmail.com"
      },
      "Balance": 0,
      "DeliveryInfo": {
        "DeliveryType": "Email",
        "DeliveryTime": "2025-07-17T13:48:48-07:00"
      },
      "TaxExemptionRef": {}
    }
  ],
  "expenses": [
    {
      "AccountRef": {
        "value": "113",
        "name": "Truist Checking - 7466"
      },
      "PaymentType": "Cash",
      "EntityRef": {
        "value": "32",
        "name": "QuickBooks Payments",
        "type": "Vendor"
      },
      "TotalAmt": 7.7,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "528",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-02-10T18:14:08-08:00",
        "LastUpdatedTime": "2026-02-10T18:14:08-08:00"
      },
      "TxnDate": "2026-02-10",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "System-recorded fee for QuickBooks Payments. Fee-name: DiscountRateFee, fee-type: Daily.",
      "Line": [
        {
          "Id": "1",
          "Description": "System-recorded fee for QuickBooks Payments. Fee-name: DiscountRateFee, fee-type: Daily.",
          "Amount": 7.7,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "112",
              "name": "QuickBooks Payments Fees"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "74",
        "name": "Stewardship Consulting LLC",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 200.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "518",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-02-04T11:39:21-08:00",
        "LastUpdatedTime": "2026-02-04T11:39:21-08:00"
      },
      "TxnDate": "2026-02-02",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "IN *STEWARDSHIP CONSAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "IN *STEWARDSHIP CONSAUBURN AL XXXX1006",
          "Amount": 200.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "73",
              "name": "Professional Services:Accounting fees"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 182.29,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "523",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-02-09T11:20:28-08:00",
        "LastUpdatedTime": "2026-02-09T11:20:28-08:00"
      },
      "TxnDate": "2026-01-31",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "Irene's NEW ORLEANS LA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "Irene's NEW ORLEANS LA XXXX1006",
          "Amount": 182.29,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "43",
              "name": "Meals"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "113",
        "name": "Truist Checking - 7466"
      },
      "PaymentType": "Cash",
      "EntityRef": {
        "value": "74",
        "name": "Stewardship Consulting LLC",
        "type": "Vendor"
      },
      "TotalAmt": 200.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "524",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-02-09T11:22:06-08:00",
        "LastUpdatedTime": "2026-02-09T11:22:06-08:00"
      },
      "TxnDate": "2026-01-30",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "Check",
      "Line": [
        {
          "Id": "1",
          "Description": "Check",
          "Amount": 200.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "73",
              "name": "Professional Services:Accounting fees"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 58.25,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "522",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-02-09T11:20:00-08:00",
        "LastUpdatedTime": "2026-02-09T11:20:00-08:00"
      },
      "TxnDate": "2026-01-23",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "Interest Charge on Purchases XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "Interest Charge on Purchases XXXX1006",
          "Amount": 58.25,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "41",
              "name": "Interest Expense"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 90.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "519",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-02-04T11:39:28-08:00",
        "LastUpdatedTime": "2026-02-04T11:39:28-08:00"
      },
      "TxnDate": "2026-01-23",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "NEXTDOOR ADS SAN FRANCISCO CA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "NEXTDOOR ADS SAN FRANCISCO CA XXXX1006",
          "Amount": 90.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "31",
              "name": "Advertising & marketing"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "113",
        "name": "Truist Checking - 7466"
      },
      "PaymentType": "Cash",
      "EntityRef": {
        "value": "73",
        "name": "Facebook",
        "type": "Vendor"
      },
      "TotalAmt": 100.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "517",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-02-04T11:38:11-08:00",
        "LastUpdatedTime": "2026-02-04T11:38:11-08:00"
      },
      "TxnDate": "2026-01-23",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "FACEBK *GX2WNAZB82 01-23 650-5434800 DE 6723 DEBIT CARD RECURRING PYMT",
      "Line": [
        {
          "Id": "1",
          "Description": "FACEBK *GX2WNAZB82 01-23 650-5434800 DE 6723 DEBIT CARD RECURRING PYMT",
          "Amount": 100.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "31",
              "name": "Advertising & marketing"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 21.8,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "521",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-02-04T11:39:46-08:00",
        "LastUpdatedTime": "2026-02-04T11:39:46-08:00"
      },
      "TxnDate": "2026-01-22",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "OPENAI *CHATGPT SUBSSAN FRANCISCO CA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "OPENAI *CHATGPT SUBSSAN FRANCISCO CA XXXX1006",
          "Amount": 21.8,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "1150040000",
              "name": "Software"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 215.66,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "520",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-02-04T11:39:37-08:00",
        "LastUpdatedTime": "2026-02-04T11:39:37-08:00"
      },
      "TxnDate": "2026-01-22",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "SIGNSONTHECHEAP.COM (XXX)XXX-9239 TX XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "SIGNSONTHECHEAP.COM (XXX)XXX-9239 TX XXXX1006",
          "Amount": 215.66,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "31",
              "name": "Advertising & marketing"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 29.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "512",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-20T13:13:37-08:00",
        "LastUpdatedTime": "2026-01-20T13:13:37-08:00"
      },
      "TxnDate": "2026-01-18",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "LATE FEE XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "LATE FEE XXXX1006",
          "Amount": 29.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "72",
              "name": "General business expenses:Bank fees & service charges"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "32",
        "name": "QuickBooks Payments",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 41.42,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "511",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-20T13:12:39-08:00",
        "LastUpdatedTime": "2026-01-20T13:12:39-08:00"
      },
      "TxnDate": "2026-01-16",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "INTUIT QUICKBOOKS XXX-XXX-8848 CA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "INTUIT QUICKBOOKS XXX-XXX-8848 CA XXXX1006",
          "Amount": 41.42,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "1150040000",
              "name": "Software"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 71.91,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "488",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-12T06:49:30-08:00",
        "LastUpdatedTime": "2026-01-12T06:49:30-08:00"
      },
      "TxnDate": "2026-01-08",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
          "Amount": 71.91,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 18.56,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "489",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-12T06:49:42-08:00",
        "LastUpdatedTime": "2026-01-12T06:49:42-08:00"
      },
      "TxnDate": "2026-01-07",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "COOK OUT AUBURN MALLAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "COOK OUT AUBURN MALLAUBURN AL XXXX1006",
          "Amount": 18.56,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 16.34,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "262",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T15:00:41-08:00",
        "LastUpdatedTime": "2026-01-09T15:00:41-08:00"
      },
      "TxnDate": "2026-01-06",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "RUSSELL BUILDING SUPAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "RUSSELL BUILDING SUPAUBURN AL XXXX1006",
          "Amount": 16.34,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "63",
        "name": "RaceTrac",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 36.82,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "234",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:30:24-08:00",
        "LastUpdatedTime": "2026-01-09T11:30:24-08:00"
      },
      "TxnDate": "2026-01-06",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "RACETRAC XXXX 2683 AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "RACETRAC XXXX 2683 AUBURN AL XXXX1006",
          "Amount": 36.82,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "87",
              "name": "Automotive:Vehicle gas & fuel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "27",
        "name": "Home Depot",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 9.79,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "206",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-09T11:22:07-08:00",
        "LastUpdatedTime": "2026-01-09T11:23:56-08:00"
      },
      "TxnDate": "2026-01-06",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "THE HOME DEPOT OPELIKA AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "THE HOME DEPOT OPELIKA AL XXXX1006",
          "Amount": 9.79,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 65.4,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "213",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:25:03-08:00",
        "LastUpdatedTime": "2026-01-09T11:25:03-08:00"
      },
      "TxnDate": "2026-01-05",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "DISCOUNT TIRE ALM 04OPELIKA AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "DISCOUNT TIRE ALM 04OPELIKA AL XXXX1006",
          "Amount": 65.4,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "92",
              "name": "Automotive:Vehicle repairs & maintenance"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 213.26,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "214",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:25:39-08:00",
        "LastUpdatedTime": "2026-01-09T11:25:39-08:00"
      },
      "TxnDate": "2026-01-04",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "GENESIS (XXX)XXX-2588 UT XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "GENESIS (XXX)XXX-2588 UT XXXX1006",
          "Amount": 213.26,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "15",
        "name": "Wawa",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 10.19,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "215",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:26:05-08:00",
        "LastUpdatedTime": "2026-01-09T11:26:05-08:00"
      },
      "TxnDate": "2026-01-03",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WAWA 5440 TALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WAWA 5440 TALLAHASSEE FL XXXX1006",
          "Amount": 10.19,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "50",
        "name": "Amazon",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 16.19,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "208",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:23:42-08:00",
        "LastUpdatedTime": "2026-01-09T11:23:42-08:00"
      },
      "TxnDate": "2026-01-03",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "Amazon Prime Amazon.com WA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "Amazon Prime Amazon.com WA XXXX1006",
          "Amount": 16.19,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 12.98,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "218",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:26:35-08:00",
        "LastUpdatedTime": "2026-01-09T11:26:35-08:00"
      },
      "TxnDate": "2026-01-01",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "TROPICAL SMOOTHIE CATALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "TROPICAL SMOOTHIE CATALLAHASSEE FL XXXX1006",
          "Amount": 12.98,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 38.32,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "217",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:26:22-08:00",
        "LastUpdatedTime": "2026-01-09T11:26:22-08:00"
      },
      "TxnDate": "2026-01-01",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "C K MART 404 TALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "C K MART 404 TALLAHASSEE FL XXXX1006",
          "Amount": 38.32,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "87",
              "name": "Automotive:Vehicle gas & fuel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "15",
        "name": "Wawa",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 16.32,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "216",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:26:16-08:00",
        "LastUpdatedTime": "2026-01-09T11:26:16-08:00"
      },
      "TxnDate": "2026-01-01",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WAWA 5440 TALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WAWA 5440 TALLAHASSEE FL XXXX1006",
          "Amount": 16.32,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "34",
        "name": "Chick-Fil-A",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 6.61,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "220",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:26:59-08:00",
        "LastUpdatedTime": "2026-01-09T11:26:59-08:00"
      },
      "TxnDate": "2025-12-31",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "CHICK-FIL-A #XX370 0TALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "CHICK-FIL-A #XX370 0TALLAHASSEE FL XXXX1006",
          "Amount": 6.61,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 13.92,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "219",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:26:48-08:00",
        "LastUpdatedTime": "2026-01-09T11:26:48-08:00"
      },
      "TxnDate": "2025-12-31",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "MOE'S # XX9 179 TALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "MOE'S # XX9 179 TALLAHASSEE FL XXXX1006",
          "Amount": 13.92,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 69.56,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "221",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:27:22-08:00",
        "LastUpdatedTime": "2026-01-09T11:27:22-08:00"
      },
      "TxnDate": "2025-12-27",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "KIKU JAPANESE FUSIONTALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "KIKU JAPANESE FUSIONTALLAHASSEE FL XXXX1006",
          "Amount": 69.56,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "43",
              "name": "Meals"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": true,
      "TotalAmt": 252.96,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "11"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "236",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:31:15-08:00",
        "LastUpdatedTime": "2026-01-09T11:31:15-08:00"
      },
      "TxnDate": "2025-12-26",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "UNITED AIRLINES HOUSTON TX XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "UNITED AIRLINES HOUSTON TX XXXX1006",
          "Amount": 252.96,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": true,
      "TotalAmt": 18.26,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "11"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "235",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:31:15-08:00",
        "LastUpdatedTime": "2026-01-09T11:31:15-08:00"
      },
      "TxnDate": "2025-12-26",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "UNITED AIRLINES HOUSTON TX XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "UNITED AIRLINES HOUSTON TX XXXX1006",
          "Amount": 18.26,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 11.99,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "222",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:27:37-08:00",
        "LastUpdatedTime": "2026-01-09T11:27:37-08:00"
      },
      "TxnDate": "2025-12-26",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "ABC*X0049-CRUNCH FITAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "ABC*X0049-CRUNCH FITAUBURN AL XXXX1006",
          "Amount": 11.99,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": true,
      "TotalAmt": 40.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "11"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "237",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:31:16-08:00",
        "LastUpdatedTime": "2026-01-09T11:31:16-08:00"
      },
      "TxnDate": "2025-12-25",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "UNITED AIRLINES HOUSTON TX XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "UNITED AIRLINES HOUSTON TX XXXX1006",
          "Amount": 40.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "8",
        "name": "Circle K",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 47.68,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "223",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:28:55-08:00",
        "LastUpdatedTime": "2026-01-09T11:28:55-08:00"
      },
      "TxnDate": "2025-12-24",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "CIRCLE K X5171/CIRCLTALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "CIRCLE K X5171/CIRCLTALLAHASSEE FL XXXX1006",
          "Amount": 47.68,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "87",
              "name": "Automotive:Vehicle gas & fuel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "27",
        "name": "Home Depot",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 138.68,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "233",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:30:11-08:00",
        "LastUpdatedTime": "2026-01-09T11:30:11-08:00"
      },
      "TxnDate": "2025-12-23",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "THE HOME DEPOT TALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "THE HOME DEPOT TALLAHASSEE FL XXXX1006",
          "Amount": 138.68,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 12.86,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "242",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-09T11:33:41-08:00",
        "LastUpdatedTime": "2026-01-14T03:42:59-08:00"
      },
      "TxnDate": "2025-12-22",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WAL-MART SUPERCENTERTALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WAL-MART SUPERCENTERTALLAHASSEE FL XXXX1006",
          "Amount": 12.86,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 16.44,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "241",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:33:03-08:00",
        "LastUpdatedTime": "2026-01-09T11:33:03-08:00"
      },
      "TxnDate": "2025-12-22",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay BT*TIKTOK SHOCULVER CITY CA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay BT*TIKTOK SHOCULVER CITY CA XXXX1006",
          "Amount": 16.44,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 18.66,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "238",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:31:35-08:00",
        "LastUpdatedTime": "2026-01-09T11:31:35-08:00"
      },
      "TxnDate": "2025-12-20",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AL DEPT OF REVENUE XXX-XXX-1990 AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AL DEPT OF REVENUE XXX-XXX-1990 AL XXXX1006",
          "Amount": 18.66,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "48",
              "name": "Taxes and Licenses"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "113",
        "name": "Truist Checking - 7466"
      },
      "PaymentType": "Cash",
      "TotalAmt": 64.17,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "261",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:44:39-08:00",
        "LastUpdatedTime": "2026-01-09T11:44:39-08:00"
      },
      "TxnDate": "2025-12-18",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "E-PAYMENT DISCOVER 0490 INTERNETPAYMENT",
      "Line": [
        {
          "Id": "1",
          "Description": "E-PAYMENT DISCOVER 0490 INTERNETPAYMENT",
          "Amount": 64.17,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "61",
        "name": "United Airlines",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 40.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "240",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:32:41-08:00",
        "LastUpdatedTime": "2026-01-09T11:32:41-08:00"
      },
      "TxnDate": "2025-12-18",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "UNITED AIRLINES HOUSTON TX XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "UNITED AIRLINES HOUSTON TX XXXX1006",
          "Amount": 40.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": true,
      "TotalAmt": 359.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "11"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "239",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:32:25-08:00",
        "LastUpdatedTime": "2026-01-09T11:32:25-08:00"
      },
      "TxnDate": "2025-12-18",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "MOBILE PAYMENT - THANK YOU XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "MOBILE PAYMENT - THANK YOU XXXX1006",
          "Amount": 359.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "58",
              "name": "Owner investments"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 45.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "269",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:25:06-08:00",
        "LastUpdatedTime": "2026-01-10T04:25:06-08:00"
      },
      "TxnDate": "2025-12-16",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "MED*UCHEALTH XXX7000DENVER CO XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "MED*UCHEALTH XXX7000DENVER CO XXXX1006",
          "Amount": 45.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "32",
        "name": "QuickBooks Payments",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 41.42,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "248",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-09T11:38:44-08:00",
        "LastUpdatedTime": "2026-01-09T11:49:08-08:00"
      },
      "TxnDate": "2025-12-16",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "INTUIT QUICKBOOKS XXX-XXX-8848 CA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "INTUIT QUICKBOOKS XXX-XXX-8848 CA XXXX1006",
          "Amount": 41.42,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "112",
              "name": "QuickBooks Payments Fees"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 17.34,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "247",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-09T11:35:55-08:00",
        "LastUpdatedTime": "2026-01-14T03:44:52-08:00"
      },
      "TxnDate": "2025-12-16",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
          "Amount": 17.34,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 190.29,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "244",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-09T11:34:36-08:00",
        "LastUpdatedTime": "2026-01-14T03:44:12-08:00"
      },
      "TxnDate": "2025-12-16",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "TST* SALT & LIME 002STEAMBOAT SPRIN CO XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "TST* SALT & LIME 002STEAMBOAT SPRIN CO XXXX1006",
          "Amount": 190.29,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "62",
        "name": "Walgreens",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 13.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "243",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-09T11:33:50-08:00",
        "LastUpdatedTime": "2026-01-14T03:43:15-08:00"
      },
      "TxnDate": "2025-12-16",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WALGREENS STEAMBOAT SPRINGS CO XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WALGREENS STEAMBOAT SPRINGS CO XXXX1006",
          "Amount": 13.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 25.68,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "265",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:23:48-08:00",
        "LastUpdatedTime": "2026-01-10T04:23:48-08:00"
      },
      "TxnDate": "2025-12-15",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "TST* APRES BURGER BISTEAMBOAT SPRIN CO XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "TST* APRES BURGER BISTEAMBOAT SPRIN CO XXXX1006",
          "Amount": 25.68,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "87",
              "name": "Automotive:Vehicle gas & fuel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 28.46,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "270",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:25:38-08:00",
        "LastUpdatedTime": "2026-01-10T04:25:38-08:00"
      },
      "TxnDate": "2025-12-14",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "POWDER PURSUITS - STSTEAMBOAT SPR CO XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "POWDER PURSUITS - STSTEAMBOAT SPR CO XXXX1006",
          "Amount": 28.46,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 17.05,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "267",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:24:44-08:00",
        "LastUpdatedTime": "2026-01-10T04:24:44-08:00"
      },
      "TxnDate": "2025-12-14",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "PARADIES LAGARDERE @ATLANTA GA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "PARADIES LAGARDERE @ATLANTA GA XXXX1006",
          "Amount": 17.05,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 3.88,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "266",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:24:37-08:00",
        "LastUpdatedTime": "2026-01-10T04:24:37-08:00"
      },
      "TxnDate": "2025-12-14",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "PARADIES LAGARDERE @ATLANTA GA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "PARADIES LAGARDERE @ATLANTA GA XXXX1006",
          "Amount": 3.88,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 87.65,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "246",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-09T11:35:45-08:00",
        "LastUpdatedTime": "2026-01-14T03:45:03-08:00"
      },
      "TxnDate": "2025-12-14",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
          "Amount": 87.65,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 3.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "271",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:25:58-08:00",
        "LastUpdatedTime": "2026-01-10T04:25:58-08:00"
      },
      "TxnDate": "2025-12-13",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "CTLP*CSC SERVICEWORKMELVILLE NY XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "CTLP*CSC SERVICEWORKMELVILLE NY XXXX1006",
          "Amount": 3.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 38.74,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "268",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:24:55-08:00",
        "LastUpdatedTime": "2026-01-10T04:24:55-08:00"
      },
      "TxnDate": "2025-12-13",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "SUNSTOP 430 BAINBRIDGE GA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "SUNSTOP 430 BAINBRIDGE GA XXXX1006",
          "Amount": 38.74,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "61",
        "name": "United Airlines",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 40.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "249",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:39:02-08:00",
        "LastUpdatedTime": "2026-01-09T11:39:02-08:00"
      },
      "TxnDate": "2025-12-13",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "UNITED AIRLINES HOUSTON TX XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "UNITED AIRLINES HOUSTON TX XXXX1006",
          "Amount": 40.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 36.88,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "252",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-09T11:39:15-08:00",
        "LastUpdatedTime": "2026-01-14T03:45:14-08:00"
      },
      "TxnDate": "2025-12-12",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
          "Amount": 36.88,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 436.69,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "251",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:39:12-08:00",
        "LastUpdatedTime": "2026-01-09T11:39:12-08:00"
      },
      "TxnDate": "2025-12-12",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "ALL ROADS TRAVEL HENDERSON NV XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "ALL ROADS TRAVEL HENDERSON NV XXXX1006",
          "Amount": 436.69,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "52",
        "name": "Chevron",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 31.31,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "250",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:39:05-08:00",
        "LastUpdatedTime": "2026-01-09T11:39:05-08:00"
      },
      "TxnDate": "2025-12-12",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "CHEVRON XXX8681/CHEVCOLQUITT GA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "CHEVRON XXX8681/CHEVCOLQUITT GA XXXX1006",
          "Amount": 31.31,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "87",
              "name": "Automotive:Vehicle gas & fuel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 48.05,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "273",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:32:29-08:00",
        "LastUpdatedTime": "2026-01-10T04:32:29-08:00"
      },
      "TxnDate": "2025-12-07",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "SUNSTOP 430 BAINBRIDGE GA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "SUNSTOP 430 BAINBRIDGE GA XXXX1006",
          "Amount": 48.05,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "87",
              "name": "Automotive:Vehicle gas & fuel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 213.26,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "272",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:32:17-08:00",
        "LastUpdatedTime": "2026-01-10T04:32:17-08:00"
      },
      "TxnDate": "2025-12-07",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "GENESIS (XXX)XXX-2588 UT XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "GENESIS (XXX)XXX-2588 UT XXXX1006",
          "Amount": 213.26,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 1.76,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "254",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-09T11:39:39-08:00",
        "LastUpdatedTime": "2026-01-16T04:00:58-08:00"
      },
      "TxnDate": "2025-12-07",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "SUNSTOP 430 BAINBRIDGE GA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "SUNSTOP 430 BAINBRIDGE GA XXXX1006",
          "Amount": 1.76,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 65.59,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "253",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:39:20-08:00",
        "LastUpdatedTime": "2026-01-09T11:39:20-08:00"
      },
      "TxnDate": "2025-12-07",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "UEP*KYOTO JAPANESE CTALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "UEP*KYOTO JAPANESE CTALLAHASSEE FL XXXX1006",
          "Amount": 65.59,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "43",
              "name": "Meals"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 21.88,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "274",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:32:38-08:00",
        "LastUpdatedTime": "2026-01-14T03:45:38-08:00"
      },
      "TxnDate": "2025-12-05",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "CHECKERS #3184 COLUMBUS GA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "CHECKERS #3184 COLUMBUS GA XXXX1006",
          "Amount": 21.88,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "2",
        "name": "Publix",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 44.79,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "277",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:33:26-08:00",
        "LastUpdatedTime": "2026-01-14T03:46:09-08:00"
      },
      "TxnDate": "2025-12-04",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "PUBLIX AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "PUBLIX AUBURN AL XXXX1006",
          "Amount": 44.79,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 171.76,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "276",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:33:15-08:00",
        "LastUpdatedTime": "2026-01-10T04:33:15-08:00"
      },
      "TxnDate": "2025-12-04",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "SERVICE SPRING CORP,XXX-XXX-0201 OH XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "SERVICE SPRING CORP,XXX-XXX-0201 OH XXXX1006",
          "Amount": 171.76,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "50",
        "name": "Amazon",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 37.25,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "275",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:32:48-08:00",
        "LastUpdatedTime": "2026-01-10T04:32:48-08:00"
      },
      "TxnDate": "2025-12-04",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AMAZON MARKETPLACE NAMZN.COM/BILL WA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AMAZON MARKETPLACE NAMZN.COM/BILL WA XXXX1006",
          "Amount": 37.25,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "44",
              "name": "Office expenses"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 44.39,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "263",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-09T15:00:45-08:00",
        "LastUpdatedTime": "2026-01-14T03:46:03-08:00"
      },
      "TxnDate": "2025-12-04",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
          "Amount": 44.39,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "19",
        "name": "Hobby Lobby",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 13.08,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "280",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:33:57-08:00",
        "LastUpdatedTime": "2026-01-10T04:33:57-08:00"
      },
      "TxnDate": "2025-12-02",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "THE MAKER AND MERCHAAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "THE MAKER AND MERCHAAUBURN AL XXXX1006",
          "Amount": 13.08,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 31.31,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "279",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:33:48-08:00",
        "LastUpdatedTime": "2026-01-10T04:33:48-08:00"
      },
      "TxnDate": "2025-12-02",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay TIKTOK SHOP CULVER CITY CA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay TIKTOK SHOP CULVER CITY CA XXXX1006",
          "Amount": 31.31,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 31.59,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "278",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:33:38-08:00",
        "LastUpdatedTime": "2026-01-14T03:46:19-08:00"
      },
      "TxnDate": "2025-12-02",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "HOMEGOODS #XXXX 0000AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "HOMEGOODS #XXXX 0000AUBURN AL XXXX1006",
          "Amount": 31.59,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 7.62,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "283",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:34:13-08:00",
        "LastUpdatedTime": "2026-01-14T03:46:29-08:00"
      },
      "TxnDate": "2025-12-01",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "COOK OUT AUBURN MALLAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "COOK OUT AUBURN MALLAUBURN AL XXXX1006",
          "Amount": 7.62,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 97.64,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "282",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:34:08-08:00",
        "LastUpdatedTime": "2026-01-10T04:34:08-08:00"
      },
      "TxnDate": "2025-12-01",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AL DEPT OF REVENUE XXX-XXX-1990 AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AL DEPT OF REVENUE XXX-XXX-1990 AL XXXX1006",
          "Amount": 97.64,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "48",
              "name": "Taxes and Licenses"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 157.03,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "281",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:34:03-08:00",
        "LastUpdatedTime": "2026-01-10T04:34:03-08:00"
      },
      "TxnDate": "2025-12-01",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay BT*TIKTOK SHOCULVER CITY CA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay BT*TIKTOK SHOCULVER CITY CA XXXX1006",
          "Amount": 157.03,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 56.67,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "285",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:34:37-08:00",
        "LastUpdatedTime": "2026-01-10T04:34:37-08:00"
      },
      "TxnDate": "2025-11-30",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "B TURNERS OPELIKA RDAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "B TURNERS OPELIKA RDAUBURN AL XXXX1006",
          "Amount": 56.67,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "2",
        "name": "Publix",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 29.16,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "284",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:34:20-08:00",
        "LastUpdatedTime": "2026-01-14T03:46:33-08:00"
      },
      "TxnDate": "2025-11-30",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "PUBLIX AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "PUBLIX AUBURN AL XXXX1006",
          "Amount": 29.16,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 3.07,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "287",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:34:57-08:00",
        "LastUpdatedTime": "2026-01-14T03:46:48-08:00"
      },
      "TxnDate": "2025-11-28",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
          "Amount": 3.07,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 11.99,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "286",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:34:49-08:00",
        "LastUpdatedTime": "2026-01-14T03:46:42-08:00"
      },
      "TxnDate": "2025-11-28",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
          "Amount": 11.99,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 200.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "288",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:35:05-08:00",
        "LastUpdatedTime": "2026-01-10T04:35:05-08:00"
      },
      "TxnDate": "2025-11-27",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "ALL ROADS TRAVEL HENDERSON NV XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "ALL ROADS TRAVEL HENDERSON NV XXXX1006",
          "Amount": 200.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 11.99,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "289",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:35:11-08:00",
        "LastUpdatedTime": "2026-01-10T04:35:11-08:00"
      },
      "TxnDate": "2025-11-26",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "ABC*X0049-CRUNCH FITAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "ABC*X0049-CRUNCH FITAUBURN AL XXXX1006",
          "Amount": 11.99,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 117.13,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "291",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:36:17-08:00",
        "LastUpdatedTime": "2026-01-16T04:11:21-08:00"
      },
      "TxnDate": "2025-11-25",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "TAKE X #XX4 454 TALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "TAKE X #XX4 454 TALLAHASSEE FL XXXX1006",
          "Amount": 117.13,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "92",
              "name": "Automotive:Vehicle repairs & maintenance"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "10",
        "name": "Shell",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 58.06,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "290",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:35:35-08:00",
        "LastUpdatedTime": "2026-01-10T04:35:35-08:00"
      },
      "TxnDate": "2025-11-25",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "3433 THOMASVILLE RD TALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "3433 THOMASVILLE RD TALLAHASSEE FL XXXX1006",
          "Amount": 58.06,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "87",
              "name": "Automotive:Vehicle gas & fuel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "113",
        "name": "Truist Checking - 7466"
      },
      "PaymentType": "Cash",
      "TotalAmt": 250.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "260",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:44:13-08:00",
        "LastUpdatedTime": "2026-01-09T11:44:13-08:00"
      },
      "TxnDate": "2025-11-25",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "E-PAYMENT DISCOVER 0490 INTERNETPAYMENT",
      "Line": [
        {
          "Id": "1",
          "Description": "E-PAYMENT DISCOVER 0490 INTERNETPAYMENT",
          "Amount": 250.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "31",
              "name": "Advertising & marketing"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 15.45,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "292",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:36:27-08:00",
        "LastUpdatedTime": "2026-01-14T03:47:10-08:00"
      },
      "TxnDate": "2025-11-24",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WILLIAMS SEAFOOD, INPANACEA FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WILLIAMS SEAFOOD, INPANACEA FL XXXX1006",
          "Amount": 15.45,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "113",
        "name": "Truist Checking - 7466"
      },
      "PaymentType": "Cash",
      "EntityRef": {
        "value": "32",
        "name": "QuickBooks Payments",
        "type": "Vendor"
      },
      "TotalAmt": 7.7,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "195",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-11-23T17:23:45-08:00",
        "LastUpdatedTime": "2025-11-23T17:23:45-08:00"
      },
      "TxnDate": "2025-11-23",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "System-recorded fee for QuickBooks Payments. Fee-name: DiscountRateFee, fee-type: Daily.",
      "Line": [
        {
          "Id": "1",
          "Description": "System-recorded fee for QuickBooks Payments. Fee-name: DiscountRateFee, fee-type: Daily.",
          "Amount": 7.7,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "112",
              "name": "QuickBooks Payments Fees"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 51.09,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "295",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:37:20-08:00",
        "LastUpdatedTime": "2026-01-10T04:37:20-08:00"
      },
      "TxnDate": "2025-11-22",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "MARATHON PETROX1738 Auburn AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "MARATHON PETROX1738 Auburn AL XXXX1006",
          "Amount": 51.09,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "87",
              "name": "Automotive:Vehicle gas & fuel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "18",
        "name": "Whataburger",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 24.38,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "294",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:37:15-08:00",
        "LastUpdatedTime": "2026-01-14T03:47:16-08:00"
      },
      "TxnDate": "2025-11-22",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay WHATABURGER TALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay WHATABURGER TALLAHASSEE FL XXXX1006",
          "Amount": 24.38,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "64",
        "name": "Apex Media Solutions",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 249.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "293",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:37:11-08:00",
        "LastUpdatedTime": "2026-01-10T04:37:11-08:00"
      },
      "TxnDate": "2025-11-22",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "APEX MEDIA SOLUTIONSSTUART FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "APEX MEDIA SOLUTIONSSTUART FL XXXX1006",
          "Amount": 249.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "31",
              "name": "Advertising & marketing"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": true,
      "TotalAmt": 455.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "11"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "299",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:40:39-08:00",
        "LastUpdatedTime": "2026-01-10T04:40:39-08:00"
      },
      "TxnDate": "2025-11-18",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "MOBILE PAYMENT - THANK YOU XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "MOBILE PAYMENT - THANK YOU XXXX1006",
          "Amount": 455.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "58",
              "name": "Owner investments"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "66",
        "name": "Amarr Garage Doors",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 52.94,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "298",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:39:31-08:00",
        "LastUpdatedTime": "2026-01-10T04:39:31-08:00"
      },
      "TxnDate": "2025-11-18",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AMARR GARAGE DOORS 2COLUMBUS GA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AMARR GARAGE DOORS 2COLUMBUS GA XXXX1006",
          "Amount": 52.94,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": true,
      "TotalAmt": 359.18,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "11"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "297",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:38:51-08:00",
        "LastUpdatedTime": "2026-01-10T04:38:51-08:00"
      },
      "TxnDate": "2025-11-18",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "MOBILE PAYMENT - THANK YOU XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "MOBILE PAYMENT - THANK YOU XXXX1006",
          "Amount": 359.18,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "58",
              "name": "Owner investments"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "65",
        "name": "Ace Hardware",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 43.57,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "296",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:38:07-08:00",
        "LastUpdatedTime": "2026-01-10T04:38:07-08:00"
      },
      "TxnDate": "2025-11-18",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "UNIVERSITY ACE HARDWAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "UNIVERSITY ACE HARDWAUBURN AL XXXX1006",
          "Amount": 43.57,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "24",
        "name": "Dollar General",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 2.7,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "300",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:40:52-08:00",
        "LastUpdatedTime": "2026-01-10T04:40:52-08:00"
      },
      "TxnDate": "2025-11-17",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "DOLLAR GENERAL #1675AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "DOLLAR GENERAL #1675AUBURN AL XXXX1006",
          "Amount": 2.7,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "44",
              "name": "Office expenses"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "32",
        "name": "QuickBooks Payments",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 41.42,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "303",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:41:49-08:00",
        "LastUpdatedTime": "2026-01-10T04:41:49-08:00"
      },
      "TxnDate": "2025-11-16",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "INTUIT QUICKBOOKS XXX-XXX-8848 CA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "INTUIT QUICKBOOKS XXX-XXX-8848 CA XXXX1006",
          "Amount": 41.42,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "112",
              "name": "QuickBooks Payments Fees"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 25.31,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "302",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:41:10-08:00",
        "LastUpdatedTime": "2026-01-14T03:47:35-08:00"
      },
      "TxnDate": "2025-11-16",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
          "Amount": 25.31,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 24.09,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "301",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:40:56-08:00",
        "LastUpdatedTime": "2026-01-10T04:40:56-08:00"
      },
      "TxnDate": "2025-11-16",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "ACAPULCOS MEXICAN GRAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "ACAPULCOS MEXICAN GRAUBURN AL XXXX1006",
          "Amount": 24.09,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "43",
              "name": "Meals"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 34.44,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "317",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:44:43-08:00",
        "LastUpdatedTime": "2026-01-14T03:47:57-08:00"
      },
      "TxnDate": "2025-11-14",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
          "Amount": 34.44,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "5",
        "name": "Dairy Queen",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 7.95,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "316",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:44:35-08:00",
        "LastUpdatedTime": "2026-01-14T03:47:42-08:00"
      },
      "TxnDate": "2025-11-14",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "DAIRY QUEEN #XX205 4COLUMBUS GA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "DAIRY QUEEN #XX205 4COLUMBUS GA XXXX1006",
          "Amount": 7.95,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 34.01,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "315",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:44:16-08:00",
        "LastUpdatedTime": "2026-01-10T04:44:16-08:00"
      },
      "TxnDate": "2025-11-14",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "EL CARRIZO 6575 WHITCOLUMBUS GA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "EL CARRIZO 6575 WHITCOLUMBUS GA XXXX1006",
          "Amount": 34.01,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "43",
              "name": "Meals"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 48.31,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "264",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T15:00:57-08:00",
        "LastUpdatedTime": "2026-01-09T15:00:57-08:00"
      },
      "TxnDate": "2025-11-14",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
          "Amount": 48.31,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "44",
              "name": "Office expenses"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "113",
        "name": "Truist Checking - 7466"
      },
      "PaymentType": "Cash",
      "EntityRef": {
        "value": "32",
        "name": "QuickBooks Payments",
        "type": "Vendor"
      },
      "TotalAmt": 8.73,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "190",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-11-14T18:41:39-08:00",
        "LastUpdatedTime": "2025-11-14T18:41:39-08:00"
      },
      "TxnDate": "2025-11-14",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "System-recorded fee for QuickBooks Payments. Fee-name: DiscountRateFee, fee-type: Daily.",
      "Line": [
        {
          "Id": "1",
          "Description": "System-recorded fee for QuickBooks Payments. Fee-name: DiscountRateFee, fee-type: Daily.",
          "Amount": 8.73,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "112",
              "name": "QuickBooks Payments Fees"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 13.23,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "319",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:45:12-08:00",
        "LastUpdatedTime": "2026-01-14T03:48:02-08:00"
      },
      "TxnDate": "2025-11-13",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
          "Amount": 13.23,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 40.31,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "318",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:45:04-08:00",
        "LastUpdatedTime": "2026-01-10T04:45:04-08:00"
      },
      "TxnDate": "2025-11-13",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "UMIKA AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "UMIKA AUBURN AL XXXX1006",
          "Amount": 40.31,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "43",
              "name": "Meals"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "2",
        "name": "Publix",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 6.41,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "304",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:42:00-08:00",
        "LastUpdatedTime": "2026-01-14T03:48:07-08:00"
      },
      "TxnDate": "2025-11-12",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "PUBLIX AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "PUBLIX AUBURN AL XXXX1006",
          "Amount": 6.41,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "67",
        "name": "Service Spring Corp",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 104.03,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "305",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:42:16-08:00",
        "LastUpdatedTime": "2026-01-10T04:42:16-08:00"
      },
      "TxnDate": "2025-11-11",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "SERVICE SPRING CORP,XXX-XXX-0201 OH XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "SERVICE SPRING CORP,XXX-XXX-0201 OH XXXX1006",
          "Amount": 104.03,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 9.79,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "308",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:42:30-08:00",
        "LastUpdatedTime": "2026-01-14T03:48:20-08:00"
      },
      "TxnDate": "2025-11-10",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "COOK OUT AUBURN MALLAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "COOK OUT AUBURN MALLAUBURN AL XXXX1006",
          "Amount": 9.79,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 8.71,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "307",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:42:28-08:00",
        "LastUpdatedTime": "2026-01-14T03:48:15-08:00"
      },
      "TxnDate": "2025-11-10",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "COOK OUT AUBURN MALLAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "COOK OUT AUBURN MALLAUBURN AL XXXX1006",
          "Amount": 8.71,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 43.21,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "306",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:42:24-08:00",
        "LastUpdatedTime": "2026-01-10T04:42:24-08:00"
      },
      "TxnDate": "2025-11-10",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "SUNSTOP 526 TALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "SUNSTOP 526 TALLAHASSEE FL XXXX1006",
          "Amount": 43.21,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "87",
              "name": "Automotive:Vehicle gas & fuel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 123.58,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "309",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:42:39-08:00",
        "LastUpdatedTime": "2026-01-10T04:42:39-08:00"
      },
      "TxnDate": "2025-11-08",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "ANGELO'S SEAFOOD RESOCHLOCKONEE B FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "ANGELO'S SEAFOOD RESOCHLOCKONEE B FL XXXX1006",
          "Amount": 123.58,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "43",
              "name": "Meals"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 45.8,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "310",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:42:42-08:00",
        "LastUpdatedTime": "2026-01-14T03:48:48-08:00"
      },
      "TxnDate": "2025-11-07",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
          "Amount": 45.8,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "11",
        "name": "Waffle House",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 22.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "311",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:42:44-08:00",
        "LastUpdatedTime": "2026-01-14T03:48:38-08:00"
      },
      "TxnDate": "2025-11-04",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WAFFLE HOUSE 1646 AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WAFFLE HOUSE 1646 AUBURN AL XXXX1006",
          "Amount": 22.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 37.24,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "312",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:42:51-08:00",
        "LastUpdatedTime": "2026-01-14T03:49:03-08:00"
      },
      "TxnDate": "2025-11-02",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
          "Amount": 37.24,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": true,
      "TotalAmt": 1693.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "11"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "314",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:43:35-08:00",
        "LastUpdatedTime": "2026-01-10T04:43:35-08:00"
      },
      "TxnDate": "2025-11-01",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "MOBILE PAYMENT - THANK YOU XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "MOBILE PAYMENT - THANK YOU XXXX1006",
          "Amount": 1693.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "58",
              "name": "Owner investments"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": true,
      "TotalAmt": 430.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "11"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "313",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:43:26-08:00",
        "LastUpdatedTime": "2026-01-10T04:43:26-08:00"
      },
      "TxnDate": "2025-11-01",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "MOBILE PAYMENT - THANK YOU XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "MOBILE PAYMENT - THANK YOU XXXX1006",
          "Amount": 430.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "58",
              "name": "Owner investments"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 28.3,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "320",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:45:16-08:00",
        "LastUpdatedTime": "2026-01-14T03:49:12-08:00"
      },
      "TxnDate": "2025-10-31",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
          "Amount": 28.3,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "27",
        "name": "Home Depot",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 4.99,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "226",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:29:15-08:00",
        "LastUpdatedTime": "2026-01-09T11:29:15-08:00"
      },
      "TxnDate": "2025-10-31",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "THE HOME DEPOT TALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "THE HOME DEPOT TALLAHASSEE FL XXXX1006",
          "Amount": 4.99,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 178.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "490",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-12T06:49:49-08:00",
        "LastUpdatedTime": "2026-01-12T06:49:49-08:00"
      },
      "TxnDate": "2025-10-30",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AWX*OUTSIDE LIVIN INAUSTIN TX XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AWX*OUTSIDE LIVIN INAUSTIN TX XXXX1006",
          "Amount": 178.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 1247.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "487",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-12T06:49:20-08:00",
        "LastUpdatedTime": "2026-01-12T06:49:20-08:00"
      },
      "TxnDate": "2025-10-30",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AWX*OUTSIDE LIVIN INAUSTIN TX XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AWX*OUTSIDE LIVIN INAUSTIN TX XXXX1006",
          "Amount": 1247.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 22.59,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "486",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-12T06:49:11-08:00",
        "LastUpdatedTime": "2026-01-12T06:49:11-08:00"
      },
      "TxnDate": "2025-10-30",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "PAYPAL *AOEFGSCOLTD XXXXXXX1044 CH XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "PAYPAL *AOEFGSCOLTD XXXXXXX1044 CH XXXX1006",
          "Amount": 22.59,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "61",
        "name": "United Airlines",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 18.26,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "323",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:47:13-08:00",
        "LastUpdatedTime": "2026-01-10T04:47:13-08:00"
      },
      "TxnDate": "2025-10-30",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "UNITED AIRLINES HOUSTON TX XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "UNITED AIRLINES HOUSTON TX XXXX1006",
          "Amount": 18.26,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "61",
        "name": "United Airlines",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 21.49,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "322",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:46:55-08:00",
        "LastUpdatedTime": "2026-01-10T04:46:55-08:00"
      },
      "TxnDate": "2025-10-30",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "UNITED AIRLINES HOUSTON TX XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "UNITED AIRLINES HOUSTON TX XXXX1006",
          "Amount": 21.49,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "61",
        "name": "United Airlines",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 451.24,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "321",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:45:23-08:00",
        "LastUpdatedTime": "2026-01-10T04:45:23-08:00"
      },
      "TxnDate": "2025-10-30",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "UNITED AIRLINES HOUSTON TX XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "UNITED AIRLINES HOUSTON TX XXXX1006",
          "Amount": 451.24,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "27",
        "name": "Home Depot",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 216.91,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "227",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:29:16-08:00",
        "LastUpdatedTime": "2026-01-09T11:29:16-08:00"
      },
      "TxnDate": "2025-10-30",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "THE HOME DEPOT TALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "THE HOME DEPOT TALLAHASSEE FL XXXX1006",
          "Amount": 216.91,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": true,
      "TotalAmt": 107.91,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "11"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "328",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:49:13-08:00",
        "LastUpdatedTime": "2026-01-10T04:49:13-08:00"
      },
      "TxnDate": "2025-10-29",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay THE HOME DEPOOPELIKA AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay THE HOME DEPOOPELIKA AL XXXX1006",
          "Amount": 107.91,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 2.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "324",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:47:43-08:00",
        "LastUpdatedTime": "2026-01-10T04:47:43-08:00"
      },
      "TxnDate": "2025-10-29",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "CITY OF AUBURN AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "CITY OF AUBURN AUBURN AL XXXX1006",
          "Amount": 2.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "86",
              "name": "Automotive:Parking & tolls"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 16.84,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "331",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:49:38-08:00",
        "LastUpdatedTime": "2026-01-14T03:49:37-08:00"
      },
      "TxnDate": "2025-10-27",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "GUTHRIES CHICKEN - AAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "GUTHRIES CHICKEN - AAUBURN AL XXXX1006",
          "Amount": 16.84,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": true,
      "TotalAmt": 206.01,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "11"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "330",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:49:30-08:00",
        "LastUpdatedTime": "2026-01-10T04:49:30-08:00"
      },
      "TxnDate": "2025-10-27",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay THE HOME DEPOOPELIKA AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay THE HOME DEPOOPELIKA AL XXXX1006",
          "Amount": 206.01,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": true,
      "TotalAmt": 4.33,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "11"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "329",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:49:21-08:00",
        "LastUpdatedTime": "2026-01-10T04:49:21-08:00"
      },
      "TxnDate": "2025-10-27",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay THE HOME DEPOOPELIKA AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay THE HOME DEPOOPELIKA AL XXXX1006",
          "Amount": 4.33,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 47.32,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "327",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:48:34-08:00",
        "LastUpdatedTime": "2026-01-14T03:49:32-08:00"
      },
      "TxnDate": "2025-10-27",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
          "Amount": 47.32,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 42.79,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "332",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:49:54-08:00",
        "LastUpdatedTime": "2026-01-14T03:49:49-08:00"
      },
      "TxnDate": "2025-10-26",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
          "Amount": 42.79,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 2.11,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "326",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:48:28-08:00",
        "LastUpdatedTime": "2026-01-10T04:48:28-08:00"
      },
      "TxnDate": "2025-10-26",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "ABC*X0049-CRUNCH FITAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "ABC*X0049-CRUNCH FITAUBURN AL XXXX1006",
          "Amount": 2.11,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 11.99,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "325",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:48:26-08:00",
        "LastUpdatedTime": "2026-01-10T04:48:26-08:00"
      },
      "TxnDate": "2025-10-26",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "ABC*X0049-CRUNCH FITAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "ABC*X0049-CRUNCH FITAUBURN AL XXXX1006",
          "Amount": 11.99,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "27",
        "name": "Home Depot",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 4.33,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "231",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:29:16-08:00",
        "LastUpdatedTime": "2026-01-09T11:29:16-08:00"
      },
      "TxnDate": "2025-10-26",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "THE HOME DEPOT TALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "THE HOME DEPOT TALLAHASSEE FL XXXX1006",
          "Amount": 4.33,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "27",
        "name": "Home Depot",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 211.43,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "230",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:29:16-08:00",
        "LastUpdatedTime": "2026-01-09T11:29:16-08:00"
      },
      "TxnDate": "2025-10-26",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "THE HOME DEPOT TALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "THE HOME DEPOT TALLAHASSEE FL XXXX1006",
          "Amount": 211.43,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "27",
        "name": "Home Depot",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 313.92,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "229",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:29:16-08:00",
        "LastUpdatedTime": "2026-01-09T11:29:16-08:00"
      },
      "TxnDate": "2025-10-26",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "THE HOME DEPOT TALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "THE HOME DEPOT TALLAHASSEE FL XXXX1006",
          "Amount": 313.92,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 54.99,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "334",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:50:06-08:00",
        "LastUpdatedTime": "2026-01-10T04:50:06-08:00"
      },
      "TxnDate": "2025-10-25",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "ABC*X0049-CRUNCH FITAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "ABC*X0049-CRUNCH FITAUBURN AL XXXX1006",
          "Amount": 54.99,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 33.27,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "333",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:50:01-08:00",
        "LastUpdatedTime": "2026-01-10T04:50:01-08:00"
      },
      "TxnDate": "2025-10-25",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "TST* NIFFERS PLACE AAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "TST* NIFFERS PLACE AAUBURN AL XXXX1006",
          "Amount": 33.27,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "43",
              "name": "Meals"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "34",
        "name": "Chick-Fil-A",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 11.87,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "337",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:50:55-08:00",
        "LastUpdatedTime": "2026-01-14T03:50:00-08:00"
      },
      "TxnDate": "2025-10-24",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "CHICK-FIL-A #XX549 0AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "CHICK-FIL-A #XX549 0AUBURN AL XXXX1006",
          "Amount": 11.87,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "60",
        "name": "Lowe's",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 18.1,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "336",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:50:48-08:00",
        "LastUpdatedTime": "2026-01-10T04:50:48-08:00"
      },
      "TxnDate": "2025-10-24",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "LOWE'S OPELIKA AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "LOWE'S OPELIKA AL XXXX1006",
          "Amount": 18.1,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 2.18,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "210",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:24:35-08:00",
        "LastUpdatedTime": "2026-01-09T11:24:35-08:00"
      },
      "TxnDate": "2025-10-24",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "RUSSELL BUILDING SUPAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "RUSSELL BUILDING SUPAUBURN AL XXXX1006",
          "Amount": 2.18,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 5.44,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "209",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:24:35-08:00",
        "LastUpdatedTime": "2026-01-09T11:24:35-08:00"
      },
      "TxnDate": "2025-10-24",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "RUSSELL BUILDING SUPAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "RUSSELL BUILDING SUPAUBURN AL XXXX1006",
          "Amount": 5.44,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "68",
        "name": "Alabama Department of Revenue",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 72.64,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "339",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:54:02-08:00",
        "LastUpdatedTime": "2026-01-10T04:54:02-08:00"
      },
      "TxnDate": "2025-10-23",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AL DEPT OF REVENUE XXX-XXX-1990 AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AL DEPT OF REVENUE XXX-XXX-1990 AL XXXX1006",
          "Amount": 72.64,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "1150040001",
              "name": "Sales Tax"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 41.17,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "338",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:51:25-08:00",
        "LastUpdatedTime": "2026-01-10T04:51:25-08:00"
      },
      "TxnDate": "2025-10-23",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "GLF*GOLFNOWRESERVATIXXX-XXX-4653 FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "GLF*GOLFNOWRESERVATIXXX-XXX-4653 FL XXXX1006",
          "Amount": 41.17,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "64",
        "name": "Apex Media Solutions",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 249.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "343",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:57:13-08:00",
        "LastUpdatedTime": "2026-01-10T04:57:13-08:00"
      },
      "TxnDate": "2025-10-22",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "APEX MEDIA SOLUTIONSSTUART FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "APEX MEDIA SOLUTIONSSTUART FL XXXX1006",
          "Amount": 249.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "31",
              "name": "Advertising & marketing"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 70.73,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "342",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:56:35-08:00",
        "LastUpdatedTime": "2026-01-14T03:50:11-08:00"
      },
      "TxnDate": "2025-10-22",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
          "Amount": 70.73,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "59",
        "name": "AT&T",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 10.9,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "341",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:56:20-08:00",
        "LastUpdatedTime": "2026-01-10T04:56:20-08:00"
      },
      "TxnDate": "2025-10-22",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AT&T KXTH XX3972 NA ATLANTA GA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AT&T KXTH XX3972 NA ATLANTA GA XXXX1006",
          "Amount": 10.9,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "1150040002",
              "name": "Cell Phone Service"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 21.79,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "344",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:57:25-08:00",
        "LastUpdatedTime": "2026-01-10T04:57:25-08:00"
      },
      "TxnDate": "2025-10-21",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "T-MOBILE AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "T-MOBILE AUBURN AL XXXX1006",
          "Amount": 21.79,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "1150040002",
              "name": "Cell Phone Service"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "65",
        "name": "Ace Hardware",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 68.86,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "335",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:50:42-08:00",
        "LastUpdatedTime": "2026-01-10T04:50:42-08:00"
      },
      "TxnDate": "2025-10-21",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "UNIVERSITY ACE HARDWAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "UNIVERSITY ACE HARDWAUBURN AL XXXX1006",
          "Amount": 68.86,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 12.51,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "211",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:24:35-08:00",
        "LastUpdatedTime": "2026-01-09T11:24:35-08:00"
      },
      "TxnDate": "2025-10-21",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "RUSSELL BUILDING SUPAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "RUSSELL BUILDING SUPAUBURN AL XXXX1006",
          "Amount": 12.51,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 121.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "491",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-12T06:49:55-08:00",
        "LastUpdatedTime": "2026-01-12T06:49:55-08:00"
      },
      "TxnDate": "2025-10-17",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AWX*OUTSIDE LIVIN INAUSTIN TX XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AWX*OUTSIDE LIVIN INAUSTIN TX XXXX1006",
          "Amount": 121.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "49",
              "name": "Travel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 39.63,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "346",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:58:16-08:00",
        "LastUpdatedTime": "2026-01-10T04:58:16-08:00"
      },
      "TxnDate": "2025-10-17",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay AMC 9640 ONLILEAWOOD KS XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay AMC 9640 ONLILEAWOOD KS XXXX1006",
          "Amount": 39.63,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": true,
      "TotalAmt": 682.73,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "11"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "345",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:58:10-08:00",
        "LastUpdatedTime": "2026-01-10T04:58:10-08:00"
      },
      "TxnDate": "2025-10-17",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "MOBILE PAYMENT - THANK YOU XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "MOBILE PAYMENT - THANK YOU XXXX1006",
          "Amount": 682.73,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "58",
              "name": "Owner investments"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "32",
        "name": "QuickBooks Payments",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 41.42,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "347",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:58:33-08:00",
        "LastUpdatedTime": "2026-01-10T04:58:33-08:00"
      },
      "TxnDate": "2025-10-16",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "INTUIT QUICKBOOKS XXX-XXX-8848 CA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "INTUIT QUICKBOOKS XXX-XXX-8848 CA XXXX1006",
          "Amount": 41.42,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "112",
              "name": "QuickBooks Payments Fees"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 17.43,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "350",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:59:21-08:00",
        "LastUpdatedTime": "2026-01-14T03:50:23-08:00"
      },
      "TxnDate": "2025-10-14",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "TST* YOUR PIE - AUBUAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "TST* YOUR PIE - AUBUAUBURN AL XXXX1006",
          "Amount": 17.43,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": true,
      "TotalAmt": 300.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "11"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "348",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:59:04-08:00",
        "LastUpdatedTime": "2026-01-10T04:59:04-08:00"
      },
      "TxnDate": "2025-10-13",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "MOBILE PAYMENT - THANK YOU XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "MOBILE PAYMENT - THANK YOU XXXX1006",
          "Amount": 300.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "58",
              "name": "Owner investments"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 17.44,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "351",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T04:59:35-08:00",
        "LastUpdatedTime": "2026-01-10T04:59:35-08:00"
      },
      "TxnDate": "2025-10-12",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay PLATO'S CLOSEAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay PLATO'S CLOSEAUBURN AL XXXX1006",
          "Amount": 17.44,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "16",
        "name": "Taco Bell",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 31.4,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "349",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T04:59:07-08:00",
        "LastUpdatedTime": "2026-01-14T03:50:30-08:00"
      },
      "TxnDate": "2025-10-12",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay TACO BELL 740AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay TACO BELL 740AUBURN AL XXXX1006",
          "Amount": 31.4,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 136.54,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "353",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:00:07-08:00",
        "LastUpdatedTime": "2026-01-10T05:00:07-08:00"
      },
      "TxnDate": "2025-10-10",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "TST* ZAZU GASTROPUB OPELIKA AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "TST* ZAZU GASTROPUB OPELIKA AL XXXX1006",
          "Amount": 136.54,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "43",
              "name": "Meals"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 13.28,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "352",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:00:00-08:00",
        "LastUpdatedTime": "2026-01-10T05:00:00-08:00"
      },
      "TxnDate": "2025-10-10",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AMK AUBURN UNIV 0000AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AMK AUBURN UNIV 0000AUBURN AL XXXX1006",
          "Amount": 13.28,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "113",
        "name": "Truist Checking - 7466"
      },
      "PaymentType": "Cash",
      "EntityRef": {
        "value": "32",
        "name": "QuickBooks Payments",
        "type": "Vendor"
      },
      "TotalAmt": 1.25,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "180",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-10-10T18:00:44-07:00",
        "LastUpdatedTime": "2025-10-10T18:00:44-07:00"
      },
      "TxnDate": "2025-10-10",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "System-recorded fee for QuickBooks Payments. Fee-name: DiscountRateFee, fee-type: Daily.",
      "Line": [
        {
          "Id": "1",
          "Description": "System-recorded fee for QuickBooks Payments. Fee-name: DiscountRateFee, fee-type: Daily.",
          "Amount": 1.25,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "112",
              "name": "QuickBooks Payments Fees"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "113",
        "name": "Truist Checking - 7466"
      },
      "PaymentType": "Cash",
      "EntityRef": {
        "value": "32",
        "name": "QuickBooks Payments",
        "type": "Vendor"
      },
      "TotalAmt": 5.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "178",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-10-09T18:30:50-07:00",
        "LastUpdatedTime": "2025-10-09T18:30:50-07:00"
      },
      "TxnDate": "2025-10-09",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "System-recorded fee for QuickBooks Payments. Fee-name: DiscountRateFee, fee-type: Daily.",
      "Line": [
        {
          "Id": "1",
          "Description": "System-recorded fee for QuickBooks Payments. Fee-name: DiscountRateFee, fee-type: Daily.",
          "Amount": 5.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "112",
              "name": "QuickBooks Payments Fees"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "67",
        "name": "Service Spring Corp",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 69.83,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "362",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:01:04-08:00",
        "LastUpdatedTime": "2026-01-10T05:01:04-08:00"
      },
      "TxnDate": "2025-10-07",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "SERVICE SPRING CORP,XXX-XXX-0201 OH XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "SERVICE SPRING CORP,XXX-XXX-0201 OH XXXX1006",
          "Amount": 69.83,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "113",
        "name": "Truist Checking - 7466"
      },
      "PaymentType": "Cash",
      "EntityRef": {
        "value": "32",
        "name": "QuickBooks Payments",
        "type": "Vendor"
      },
      "TotalAmt": 100.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "258",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-09T11:42:54-08:00",
        "LastUpdatedTime": "2026-01-09T11:42:54-08:00"
      },
      "TxnDate": "2025-10-07",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "FCCU Ext W PEYTON PASKE PEYTON PASKE INTERNET PAYMENT",
      "Line": [
        {
          "Id": "1",
          "Description": "FCCU Ext W PEYTON PASKE PEYTON PASKE INTERNET PAYMENT",
          "Amount": 100.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "21",
        "name": "Raceway",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 61.12,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "355",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:00:23-08:00",
        "LastUpdatedTime": "2026-01-10T05:00:23-08:00"
      },
      "TxnDate": "2025-10-06",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "RACEWAYXXXX XX7138OPELIKA AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "RACEWAYXXXX XX7138OPELIKA AL XXXX1006",
          "Amount": 61.12,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "87",
              "name": "Automotive:Vehicle gas & fuel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 20.7,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "354",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:00:17-08:00",
        "LastUpdatedTime": "2026-01-14T03:50:45-08:00"
      },
      "TxnDate": "2025-10-06",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "FOOSACKLY'S AUBURN #XXX-XXX-1506 AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "FOOSACKLY'S AUBURN #XXX-XXX-1506 AL XXXX1006",
          "Amount": 20.7,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "16",
        "name": "Taco Bell",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 28.56,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "356",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:00:26-08:00",
        "LastUpdatedTime": "2026-01-14T03:50:50-08:00"
      },
      "TxnDate": "2025-10-05",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "TACO BELL TALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "TACO BELL TALLAHASSEE FL XXXX1006",
          "Amount": 28.56,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "23",
        "name": "Firehouse Subs",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 9.13,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "357",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:00:29-08:00",
        "LastUpdatedTime": "2026-01-14T03:50:54-08:00"
      },
      "TxnDate": "2025-10-04",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "FIREHOUSE SUBS 25 QSTALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "FIREHOUSE SUBS 25 QSTALLAHASSEE FL XXXX1006",
          "Amount": 9.13,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "8",
        "name": "Circle K",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 6.74,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "360",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:00:43-08:00",
        "LastUpdatedTime": "2026-01-10T05:00:43-08:00"
      },
      "TxnDate": "2025-10-03",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "CIRCLE K # X3896/CIRCOLQUITT GA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "CIRCLE K # X3896/CIRCOLQUITT GA XXXX1006",
          "Amount": 6.74,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "16",
        "name": "Taco Bell",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 16.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "359",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:00:34-08:00",
        "LastUpdatedTime": "2026-01-14T03:50:59-08:00"
      },
      "TxnDate": "2025-10-03",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "TACO BELL COLUMBUS GA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "TACO BELL COLUMBUS GA XXXX1006",
          "Amount": 16.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "8",
        "name": "Circle K",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 50.7,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "358",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:00:32-08:00",
        "LastUpdatedTime": "2026-01-10T05:00:32-08:00"
      },
      "TxnDate": "2025-10-03",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "CIRCLE K # X3896/CIRCOLQUITT GA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "CIRCLE K # X3896/CIRCOLQUITT GA XXXX1006",
          "Amount": 50.7,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "87",
              "name": "Automotive:Vehicle gas & fuel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "67",
        "name": "Service Spring Corp",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 69.83,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "363",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:01:13-08:00",
        "LastUpdatedTime": "2026-01-10T05:01:13-08:00"
      },
      "TxnDate": "2025-10-02",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "SERVICE SPRING CORP,XXX-XXX-0201 OH XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "SERVICE SPRING CORP,XXX-XXX-0201 OH XXXX1006",
          "Amount": 69.83,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "65",
              "name": "Cost of goods sold:Direct supplies & materials"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "34",
        "name": "Chick-Fil-A",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 5.45,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "361",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:00:51-08:00",
        "LastUpdatedTime": "2026-01-14T03:51:12-08:00"
      },
      "TxnDate": "2025-10-02",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay CHICK-FIL-A #AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay CHICK-FIL-A #AUBURN AL XXXX1006",
          "Amount": 5.45,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": true,
      "TotalAmt": 35.46,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "11"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "492",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-12T06:50:07-08:00",
        "LastUpdatedTime": "2026-01-16T04:00:18-08:00"
      },
      "TxnDate": "2025-10-01",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "INTUIT QUICKBOOKS XXX-XXX-8848 CA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "INTUIT QUICKBOOKS XXX-XXX-8848 CA XXXX1006",
          "Amount": 35.46,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "44",
              "name": "Office expenses"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "113",
        "name": "Truist Checking - 7466"
      },
      "PaymentType": "Cash",
      "EntityRef": {
        "value": "32",
        "name": "QuickBooks Payments",
        "type": "Vendor"
      },
      "TotalAmt": 3.75,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "172",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-09-30T18:27:06-07:00",
        "LastUpdatedTime": "2025-09-30T18:27:06-07:00"
      },
      "TxnDate": "2025-09-30",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "System-recorded fee for QuickBooks Payments. Fee-name: DiscountRateFee, fee-type: Daily.",
      "Line": [
        {
          "Id": "1",
          "Description": "System-recorded fee for QuickBooks Payments. Fee-name: DiscountRateFee, fee-type: Daily.",
          "Amount": 3.75,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "112",
              "name": "QuickBooks Payments Fees"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "17",
        "name": "Domino's Pizza",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 23.96,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "365",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:01:36-08:00",
        "LastUpdatedTime": "2026-01-14T03:51:22-08:00"
      },
      "TxnDate": "2025-09-28",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay DOMINO'S PIZZAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay DOMINO'S PIZZAUBURN AL XXXX1006",
          "Amount": 23.96,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "18",
        "name": "Whataburger",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 17.54,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "364",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:01:29-08:00",
        "LastUpdatedTime": "2026-01-14T03:51:18-08:00"
      },
      "TxnDate": "2025-09-28",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay WHATABURGER 1AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay WHATABURGER 1AUBURN AL XXXX1006",
          "Amount": 17.54,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 13.54,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "369",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:01:50-08:00",
        "LastUpdatedTime": "2026-01-14T03:51:41-08:00"
      },
      "TxnDate": "2025-09-26",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "TST* BYRONS SMOKEHOUAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "TST* BYRONS SMOKEHOUAUBURN AL XXXX1006",
          "Amount": 13.54,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 11.99,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "368",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:01:44-08:00",
        "LastUpdatedTime": "2026-01-10T05:01:44-08:00"
      },
      "TxnDate": "2025-09-26",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "ABC*X0049-CRUNCH FITAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "ABC*X0049-CRUNCH FITAUBURN AL XXXX1006",
          "Amount": 11.99,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 6.53,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "367",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:01:42-08:00",
        "LastUpdatedTime": "2026-01-14T03:51:34-08:00"
      },
      "TxnDate": "2025-09-26",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "MARCOS PIZZA - 8463 AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "MARCOS PIZZA - 8463 AUBURN AL XXXX1006",
          "Amount": 6.53,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 50.02,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "366",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:01:39-08:00",
        "LastUpdatedTime": "2026-01-14T03:51:29-08:00"
      },
      "TxnDate": "2025-09-26",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WAL-MART XXXX 1808 STEAMBOAT SPRINGS CO XXXX1006",
          "Amount": 50.02,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "18",
        "name": "Whataburger",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 11.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "370",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:01:53-08:00",
        "LastUpdatedTime": "2026-01-14T03:51:46-08:00"
      },
      "TxnDate": "2025-09-24",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay WHATABURGER 1AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay WHATABURGER 1AUBURN AL XXXX1006",
          "Amount": 11.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 16.34,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "373",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:01:59-08:00",
        "LastUpdatedTime": "2026-01-14T03:51:58-08:00"
      },
      "TxnDate": "2025-09-22",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "KRISPY KREME 0299 AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "KRISPY KREME 0299 AUBURN AL XXXX1006",
          "Amount": 16.34,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "64",
        "name": "Apex Media Solutions",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 249.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "372",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:01:56-08:00",
        "LastUpdatedTime": "2026-01-10T05:01:56-08:00"
      },
      "TxnDate": "2025-09-22",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "APEX MEDIA SOLUTIONSSTUART FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "APEX MEDIA SOLUTIONSSTUART FL XXXX1006",
          "Amount": 249.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "31",
              "name": "Advertising & marketing"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 20.25,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "371",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:01:55-08:00",
        "LastUpdatedTime": "2026-01-14T03:51:51-08:00"
      },
      "TxnDate": "2025-09-22",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "COOK OUT AUBURN MALLAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "COOK OUT AUBURN MALLAUBURN AL XXXX1006",
          "Amount": 20.25,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "57",
        "name": "Marathon",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 59.91,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "375",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:02:22-08:00",
        "LastUpdatedTime": "2026-01-10T05:02:22-08:00"
      },
      "TxnDate": "2025-09-20",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "MARATHON XXXXXX 0000TALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "MARATHON XXXXXX 0000TALLAHASSEE FL XXXX1006",
          "Amount": 59.91,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "87",
              "name": "Automotive:Vehicle gas & fuel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 100.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "374",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:02:17-08:00",
        "LastUpdatedTime": "2026-01-10T05:02:17-08:00"
      },
      "TxnDate": "2025-09-20",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "UEP*KYOTO JAPANESE CTALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "UEP*KYOTO JAPANESE CTALLAHASSEE FL XXXX1006",
          "Amount": 100.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "43",
              "name": "Meals"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 16.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "378",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:03:41-08:00",
        "LastUpdatedTime": "2026-01-14T03:52:16-08:00"
      },
      "TxnDate": "2025-09-19",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "BRUSTERS REAL ICE CRTALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "BRUSTERS REAL ICE CRTALLAHASSEE FL XXXX1006",
          "Amount": 16.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 53.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "377",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:03:11-08:00",
        "LastUpdatedTime": "2026-01-10T05:03:11-08:00"
      },
      "TxnDate": "2025-09-19",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "TST* HOBBIT AMERICANTALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "TST* HOBBIT AMERICANTALLAHASSEE FL XXXX1006",
          "Amount": 53.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "43",
              "name": "Meals"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 12.58,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "376",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:02:43-08:00",
        "LastUpdatedTime": "2026-01-10T05:02:43-08:00"
      },
      "TxnDate": "2025-09-19",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay FLORIDA STATETALLAHASSEE FL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay FLORIDA STATETALLAHASSEE FL XXXX1006",
          "Amount": 12.58,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 34.06,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "383",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:04:16-08:00",
        "LastUpdatedTime": "2026-01-14T03:52:36-08:00"
      },
      "TxnDate": "2025-09-13",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
          "Amount": 34.06,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 20.87,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "382",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:04:05-08:00",
        "LastUpdatedTime": "2026-01-10T05:04:05-08:00"
      },
      "TxnDate": "2025-09-13",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay AMK AUBURN COAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay AMK AUBURN COAUBURN AL XXXX1006",
          "Amount": 20.87,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "18",
        "name": "Whataburger",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 19.47,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "381",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:03:57-08:00",
        "LastUpdatedTime": "2026-01-14T03:52:28-08:00"
      },
      "TxnDate": "2025-09-13",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay WHATABURGER 1AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay WHATABURGER 1AUBURN AL XXXX1006",
          "Amount": 19.47,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "58",
        "name": "Papa John's",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 48.33,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "380",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:03:54-08:00",
        "LastUpdatedTime": "2026-01-14T03:52:22-08:00"
      },
      "TxnDate": "2025-09-13",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay PAPA JOHN'S AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay PAPA JOHN'S AUBURN AL XXXX1006",
          "Amount": 48.33,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "68",
        "name": "Alabama Department of Revenue",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 16.7,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "384",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:04:17-08:00",
        "LastUpdatedTime": "2026-01-10T05:04:17-08:00"
      },
      "TxnDate": "2025-09-12",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AL DEPT OF REVENUE XXX-XXX-1990 AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AL DEPT OF REVENUE XXX-XXX-1990 AL XXXX1006",
          "Amount": 16.7,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "1150040001",
              "name": "Sales Tax"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 50.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "385",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:04:25-08:00",
        "LastUpdatedTime": "2026-01-10T05:04:25-08:00"
      },
      "TxnDate": "2025-09-11",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay WEAGLE ONE STAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay WEAGLE ONE STAUBURN AL XXXX1006",
          "Amount": 50.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "87",
              "name": "Automotive:Vehicle gas & fuel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 12.31,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "387",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:04:40-08:00",
        "LastUpdatedTime": "2026-01-14T03:52:44-08:00"
      },
      "TxnDate": "2025-09-08",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "SMALLS SLIDERS 0000 AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "SMALLS SLIDERS 0000 AUBURN AL XXXX1006",
          "Amount": 12.31,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": true,
      "TotalAmt": 440.0,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "11"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "386",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:04:31-08:00",
        "LastUpdatedTime": "2026-01-10T05:04:31-08:00"
      },
      "TxnDate": "2025-09-08",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "MOBILE PAYMENT - THANK YOU XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "MOBILE PAYMENT - THANK YOU XXXX1006",
          "Amount": 440.0,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "58",
              "name": "Owner investments"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 20.7,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "388",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:04:47-08:00",
        "LastUpdatedTime": "2026-01-14T03:52:48-08:00"
      },
      "TxnDate": "2025-09-07",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "TST* FOOSACKLYS - AUAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "TST* FOOSACKLYS - AUAUBURN AL XXXX1006",
          "Amount": 20.7,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "18",
        "name": "Whataburger",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 20.36,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "391",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:04:58-08:00",
        "LastUpdatedTime": "2026-01-14T03:53:00-08:00"
      },
      "TxnDate": "2025-09-05",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay WHATABURGER 1AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay WHATABURGER 1AUBURN AL XXXX1006",
          "Amount": 20.36,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 26.47,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "390",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:04:54-08:00",
        "LastUpdatedTime": "2026-01-14T03:52:56-08:00"
      },
      "TxnDate": "2025-09-05",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "GUTHRIES - DOWNTOWN AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "GUTHRIES - DOWNTOWN AUBURN AL XXXX1006",
          "Amount": 26.47,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 1.5,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "389",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:04:51-08:00",
        "LastUpdatedTime": "2026-01-14T03:52:52-08:00"
      },
      "TxnDate": "2025-09-05",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "GUTHRIES - DOWNTOWN AUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "GUTHRIES - DOWNTOWN AUBURN AL XXXX1006",
          "Amount": 1.5,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "Credit": false,
      "TotalAmt": 2.78,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "392",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:05:07-08:00",
        "LastUpdatedTime": "2026-01-14T03:53:05-08:00"
      },
      "TxnDate": "2025-09-03",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "AplPay Botanic Opelika AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "AplPay Botanic Opelika AL XXXX1006",
          "Amount": 2.78,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "57",
        "name": "Marathon",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 57.26,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "395",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:05:43-08:00",
        "LastUpdatedTime": "2026-01-10T05:05:43-08:00"
      },
      "TxnDate": "2025-09-01",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "MARATHON XXXXXX 0000CUTHBERT GA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "MARATHON XXXXXX 0000CUTHBERT GA XXXX1006",
          "Amount": 57.26,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "87",
              "name": "Automotive:Vehicle gas & fuel"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "9",
        "name": "Walmart",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 19.09,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "394",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2026-01-10T05:05:40-08:00",
        "LastUpdatedTime": "2026-01-14T03:53:10-08:00"
      },
      "TxnDate": "2025-09-01",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "WMT NEIGHBORHOOD MKTAUBURN AL XXXX1006",
          "Amount": 19.09,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    },
    {
      "AccountRef": {
        "value": "115",
        "name": "Delta SkyMiles\u00ae Gold Card (1006) - 4"
      },
      "PaymentType": "CreditCard",
      "EntityRef": {
        "value": "57",
        "name": "Marathon",
        "type": "Vendor"
      },
      "Credit": false,
      "TotalAmt": 6.01,
      "PurchaseEx": {
        "any": [
          {
            "name": "{http://schema.intuit.com/finance/v3}NameValue",
            "declaredType": "com.intuit.schema.finance.v3.NameValue",
            "scope": "javax.xml.bind.JAXBElement$GlobalScope",
            "value": {
              "Name": "TxnType",
              "Value": "54"
            },
            "nil": false,
            "globalScope": true,
            "typeSubstituted": false
          }
        ]
      },
      "domain": "QBO",
      "sparse": false,
      "Id": "393",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-10T05:05:20-08:00",
        "LastUpdatedTime": "2026-01-10T05:05:20-08:00"
      },
      "TxnDate": "2025-09-01",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "MARATHON XXXXXX 0000CUTHBERT GA XXXX1006",
      "Line": [
        {
          "Id": "1",
          "Description": "MARATHON XXXXXX 0000CUTHBERT GA XXXX1006",
          "Amount": 6.01,
          "DetailType": "AccountBasedExpenseLineDetail",
          "AccountBasedExpenseLineDetail": {
            "AccountRef": {
              "value": "57",
              "name": "Owner draws"
            },
            "BillableStatus": "NotBillable",
            "TaxCodeRef": {
              "value": "NON"
            }
          },
          "CustomExtensions": []
        }
      ]
    }
  ],
  "customers": [
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "15",
        "Line1": "2236 Montiano Ln",
        "Line2": "Auburn AL 36830"
      },
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "39",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-08-21T17:00:49-07:00",
        "LastUpdatedTime": "2025-08-21T17:00:49-07:00"
      },
      "FullyQualifiedName": "Amy",
      "DisplayName": "Amy",
      "PrintOnCheckName": "Amy",
      "Active": true,
      "V4IDPseudonym": "002073e49e6e3030524d13b6e6003e377a554f",
      "PrimaryPhone": {
        "FreeFormNumber": "(912) 678-5255"
      },
      "Mobile": {
        "FreeFormNumber": "(912) 678-5255"
      },
      "PrimaryEmailAddr": {
        "Address": "Hyjhmom@gmail.com"
      }
    },
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "9",
        "Line1": "2231 Barkley Crest Lane",
        "Line2": "Auburn AL 36830"
      },
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "37",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-07-12T14:08:49-07:00",
        "LastUpdatedTime": "2025-07-17T13:53:53-07:00"
      },
      "FullyQualifiedName": "Becky McKeen",
      "DisplayName": "Becky McKeen",
      "PrintOnCheckName": "Becky McKeen",
      "Active": true,
      "V4IDPseudonym": "002073f94f7608185a41df82e26c6cf6c1e5bf",
      "PrimaryPhone": {
        "FreeFormNumber": "(706) 402-2616"
      },
      "Mobile": {
        "FreeFormNumber": "(706) 402-2616"
      },
      "PrimaryEmailAddr": {
        "Address": "Beckymckeen@auburn.edu"
      }
    },
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "27",
        "Line1": "1018 Lee Rd 61",
        "Line2": "Auburn AL 36832"
      },
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "43",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-10-09T15:33:22-07:00",
        "LastUpdatedTime": "2025-10-09T15:34:42-07:00"
      },
      "FullyQualifiedName": "Bee Jackson",
      "DisplayName": "Bee Jackson",
      "PrintOnCheckName": "Bee Jackson",
      "Active": true,
      "V4IDPseudonym": "0020736912c494c8ea4705b39171ccb8c0fc2a",
      "PrimaryPhone": {
        "FreeFormNumber": "(334) 703-0399"
      },
      "Mobile": {
        "FreeFormNumber": "(334) 703-0399"
      },
      "PrimaryEmailAddr": {
        "Address": "Tinasjackson47@gmail.com"
      }
    },
    {
      "Taxable": true,
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "48",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-12-02T10:59:51-08:00",
        "LastUpdatedTime": "2025-12-11T13:49:11-08:00"
      },
      "FullyQualifiedName": "Buddy Coburn",
      "DisplayName": "Buddy Coburn",
      "PrintOnCheckName": "Buddy Coburn",
      "Active": true,
      "V4IDPseudonym": "00207316ad44b68be9439eae0b0d9b5fdf28f6",
      "PrimaryPhone": {
        "FreeFormNumber": "1 (850) 377-5655"
      },
      "Mobile": {
        "FreeFormNumber": "1 (850) 377-5655"
      }
    },
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "81",
        "Line1": "1813 Roanoke ln.",
        "Line2": "Auburn AL"
      },
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "71",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-18T21:53:28-08:00",
        "LastUpdatedTime": "2026-02-04T11:37:59-08:00"
      },
      "FullyQualifiedName": "Connor Dunn",
      "DisplayName": "Connor Dunn",
      "PrintOnCheckName": "Connor Dunn",
      "Active": true,
      "V4IDPseudonym": "00207302ed0a793d474dec87c927d778dbf199",
      "PrimaryPhone": {
        "FreeFormNumber": "1 (678) 326-0870"
      },
      "Mobile": {
        "FreeFormNumber": "1 (678) 326-0870"
      }
    },
    {
      "Taxable": true,
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "33",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-06-24T10:26:40-07:00",
        "LastUpdatedTime": "2026-01-16T03:55:45-08:00"
      },
      "FullyQualifiedName": "David Paske",
      "DisplayName": "David Paske",
      "PrintOnCheckName": "David Paske",
      "Active": true,
      "V4IDPseudonym": "0020734f1e437294b144198a7a186b84b0be5a",
      "PrimaryPhone": {
        "FreeFormNumber": "(850) 294-9065"
      },
      "Mobile": {
        "FreeFormNumber": "(850) 294-9065"
      },
      "PrimaryEmailAddr": {
        "Address": "Paskedavid@gmail.com"
      }
    },
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "22",
        "Line1": "2475 Buckhead Road Auburn, AL   36832",
        "City": "Auburn",
        "Country": "USA",
        "CountrySubDivisionCode": "AL",
        "PostalCode": "36832"
      },
      "ShipAddr": {
        "Id": "23",
        "Line1": "2475 Buckhead Road Auburn, AL   36832",
        "City": "Auburn",
        "Country": "USA",
        "CountrySubDivisionCode": "AL",
        "PostalCode": "36832"
      },
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "42",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-10-09T12:38:54-07:00",
        "LastUpdatedTime": "2025-10-09T12:38:54-07:00"
      },
      "GivenName": "Donna",
      "FamilyName": "Stiefel",
      "FullyQualifiedName": "Donna Stiefel",
      "DisplayName": "Donna Stiefel",
      "PrintOnCheckName": "Donna Stiefel",
      "Active": true,
      "V4IDPseudonym": "002073aab36abba26c4e8397be59db22093776",
      "PrimaryPhone": {
        "FreeFormNumber": "+1 (334) 734-0245"
      }
    },
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "84",
        "Line1": "437 Stanfield Dr",
        "Line2": "Auburn AL"
      },
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "72",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-20T14:23:49-08:00",
        "LastUpdatedTime": "2026-02-04T11:37:56-08:00"
      },
      "FullyQualifiedName": "Jaime Felipe",
      "DisplayName": "Jaime Felipe",
      "PrintOnCheckName": "Jaime Felipe",
      "Active": true,
      "V4IDPseudonym": "00207378a804ad225943d7bcf2bcfc62813e7d",
      "PrimaryPhone": {
        "FreeFormNumber": "+1 (256) 516-3186"
      },
      "Mobile": {
        "FreeFormNumber": "+1 (256) 516-3186"
      }
    },
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "31",
        "Line1": "6433 CR-166",
        "City": "Opelika",
        "CountrySubDivisionCode": "AL",
        "PostalCode": "36804"
      },
      "ShipAddr": {
        "Id": "31",
        "Line1": "6433 CR-166",
        "City": "Opelika",
        "CountrySubDivisionCode": "AL",
        "PostalCode": "36804"
      },
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "45",
      "SyncToken": "2",
      "MetaData": {
        "CreateTime": "2025-10-22T17:22:33-07:00",
        "LastUpdatedTime": "2025-11-22T07:45:53-08:00"
      },
      "Title": "Mr",
      "GivenName": "Keith",
      "FamilyName": "Cooper",
      "FullyQualifiedName": "Keith Cooper",
      "DisplayName": "Keith Cooper",
      "PrintOnCheckName": "Keith Cooper",
      "Active": true,
      "V4IDPseudonym": "002073db26f934823a4cb89744a3dfd9ffc15a",
      "PrimaryPhone": {
        "FreeFormNumber": "+13343194667"
      },
      "Mobile": {
        "FreeFormNumber": "+13343194667"
      },
      "PrimaryEmailAddr": {
        "Address": "cooperkall@yahoo.com"
      },
      "DefaultTaxCodeRef": {
        "value": "3"
      }
    },
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "71"
      },
      "ShipAddr": {
        "Id": "71"
      },
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "69",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-12T06:52:02-08:00",
        "LastUpdatedTime": "2026-01-12T06:52:42-08:00"
      },
      "GivenName": "Marian",
      "FamilyName": "Harper",
      "FullyQualifiedName": "Marian Harper",
      "CompanyName": "Marian Harper",
      "DisplayName": "Marian Harper",
      "PrintOnCheckName": "Marian Harper",
      "Active": true,
      "V4IDPseudonym": "002073b4f8844b2ad8410e82e32c40dd6b85a9"
    },
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "57",
        "Line1": "2611 Wilmington Ct",
        "Country": "United States"
      },
      "ShipAddr": {
        "Id": "58",
        "Line1": "2611 Wilmington Ct",
        "Country": "United States"
      },
      "Job": false,
      "BillWithParent": false,
      "SalesTermRef": {
        "value": "1",
        "name": "Due on receipt"
      },
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "49",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-12-04T13:17:20-08:00",
        "LastUpdatedTime": "2025-12-04T13:17:20-08:00"
      },
      "GivenName": "Molly",
      "FamilyName": "Lee",
      "FullyQualifiedName": "Molly Lee",
      "DisplayName": "Molly Lee",
      "PrintOnCheckName": "Molly Lee",
      "Active": true,
      "V4IDPseudonym": "002073609354af009847118cf090a35bb6879b",
      "PrimaryPhone": {
        "FreeFormNumber": "(256) 215-0456"
      }
    },
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "18",
        "Line1": "1603 Ella Grace Dr"
      },
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "40",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-09-30T13:31:41-07:00",
        "LastUpdatedTime": "2025-10-09T13:53:15-07:00"
      },
      "FullyQualifiedName": "Nagaraj",
      "DisplayName": "Nagaraj",
      "PrintOnCheckName": "Nagaraj",
      "Active": true,
      "V4IDPseudonym": "00207397a7d299ef964862ad08cfef49220c79",
      "PrimaryPhone": {
        "FreeFormNumber": "(334) 524-7837"
      },
      "Mobile": {
        "FreeFormNumber": "(334) 524-7837"
      },
      "PrimaryEmailAddr": {
        "Address": "Ejantkar@yahoo.com"
      }
    },
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "63",
        "Line1": "1914 Preserve Dr Auburn 36879",
        "Country": "United States"
      },
      "ShipAddr": {
        "Id": "64",
        "Line1": "1914 Preserve Dr Auburn 36879",
        "Country": "United States"
      },
      "Job": false,
      "BillWithParent": false,
      "SalesTermRef": {
        "value": "1",
        "name": "Due on receipt"
      },
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "51",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-12-11T13:56:38-08:00",
        "LastUpdatedTime": "2025-12-11T13:56:38-08:00"
      },
      "GivenName": "Nina",
      "FamilyName": "Kennedy",
      "FullyQualifiedName": "Nina Kennedy",
      "DisplayName": "Nina Kennedy",
      "PrintOnCheckName": "Nina Kennedy",
      "Active": true,
      "V4IDPseudonym": "0020735bc881f7d8434eb4b0ec711085bf3ee1",
      "Mobile": {
        "FreeFormNumber": "(334) 707-2039"
      }
    },
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "42",
        "Line1": "2145 Conservation Dr",
        "City": "Auburn",
        "Country": "United States",
        "CountrySubDivisionCode": "AL"
      },
      "ShipAddr": {
        "Id": "43",
        "Line1": "2145 Conservation Dr",
        "City": "Auburn",
        "Country": "United States",
        "CountrySubDivisionCode": "AL"
      },
      "Job": false,
      "BillWithParent": false,
      "SalesTermRef": {
        "value": "1",
        "name": "Due on receipt"
      },
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "46",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-11-12T14:56:34-08:00",
        "LastUpdatedTime": "2025-11-12T14:56:34-08:00"
      },
      "GivenName": "Rick",
      "FamilyName": "Bennett",
      "FullyQualifiedName": "Rick Bennett",
      "DisplayName": "Rick Bennett",
      "PrintOnCheckName": "Rick Bennett",
      "Active": true,
      "V4IDPseudonym": "002073ee2e766501c343ea8e2da864cfffa1e6",
      "Mobile": {
        "FreeFormNumber": "+1 (816) 718-5571"
      }
    },
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "14",
        "Line1": "603 Owens Rd"
      },
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "38",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-07-17T13:41:54-07:00",
        "LastUpdatedTime": "2025-07-21T12:51:24-07:00"
      },
      "FullyQualifiedName": "Rick Elm",
      "DisplayName": "Rick Elm",
      "PrintOnCheckName": "Rick Elm",
      "Active": true,
      "V4IDPseudonym": "002073103783ad77454cfd8da1889b5b26c761",
      "PrimaryPhone": {
        "FreeFormNumber": "(732) 351-5504"
      },
      "Mobile": {
        "FreeFormNumber": "(732) 351-5504"
      },
      "PrimaryEmailAddr": {
        "Address": "Elms0411@gmail.com"
      }
    },
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "4",
        "Line1": "2261 Watercrest Dr",
        "City": "Auburn",
        "Country": "United States",
        "CountrySubDivisionCode": "Alabama",
        "PostalCode": "36830"
      },
      "ShipAddr": {
        "Id": "5",
        "Line1": "2261 Watercrest Dr",
        "City": "Auburn",
        "Country": "United States",
        "CountrySubDivisionCode": "Alabama",
        "PostalCode": "36830"
      },
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "36",
      "SyncToken": "3",
      "MetaData": {
        "CreateTime": "2025-07-08T15:05:48-07:00",
        "LastUpdatedTime": "2025-07-08T16:32:21-07:00"
      },
      "GivenName": "Robert",
      "FamilyName": "Hanne",
      "FullyQualifiedName": "Robert Hanne (Bobby)",
      "DisplayName": "Robert Hanne (Bobby)",
      "PrintOnCheckName": "Bobby",
      "Active": true,
      "V4IDPseudonym": "002073f1abc34375dd4ad298ac7622b58ef1ff",
      "PrimaryPhone": {
        "FreeFormNumber": "+1 (334) 501-7719"
      }
    },
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "47",
        "Line1": "2145 Preserve Dr",
        "Line2": "Auburn"
      },
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "47",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-11-14T14:29:00-08:00",
        "LastUpdatedTime": "2025-11-14T14:42:03-08:00"
      },
      "FullyQualifiedName": "Russell Suther",
      "DisplayName": "Russell Suther",
      "PrintOnCheckName": "Russell Suther",
      "Active": true,
      "V4IDPseudonym": "002073f5c268b71cdc46d8b64e5d88b015fc80",
      "PrimaryPhone": {
        "FreeFormNumber": "(205) 427-1918"
      },
      "Mobile": {
        "FreeFormNumber": "(205) 427-1918"
      },
      "PrimaryEmailAddr": {
        "Address": "badtolz57@gmail.com"
      }
    },
    {
      "Taxable": true,
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "1",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-06-16T12:25:35-07:00",
        "LastUpdatedTime": "2025-06-24T10:25:44-07:00"
      },
      "FullyQualifiedName": "Sample Customer",
      "DisplayName": "Sample Customer",
      "PrintOnCheckName": "Sample Customer",
      "Active": true,
      "V4IDPseudonym": "00207398aedf95dc8046c5aa0016ed2c129aad"
    },
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "30",
        "Line1": "2101 Gareth St",
        "City": "Opelika",
        "CountrySubDivisionCode": "AL",
        "PostalCode": "36801"
      },
      "ShipAddr": {
        "Id": "30",
        "Line1": "2101 Gareth St",
        "City": "Opelika",
        "CountrySubDivisionCode": "AL",
        "PostalCode": "36801"
      },
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "44",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-10-22T17:21:02-07:00",
        "LastUpdatedTime": "2025-10-22T17:21:02-07:00"
      },
      "FullyQualifiedName": "Scott Dulaney",
      "DisplayName": "Scott Dulaney",
      "PrintOnCheckName": "Scott Dulaney",
      "Active": true,
      "V4IDPseudonym": "00207364fc028441b84469a3d1ac6bdb8f9882",
      "PrimaryEmailAddr": {
        "Address": "hsdulaney@outlook.com"
      }
    },
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "75"
      },
      "ShipAddr": {
        "Id": "75"
      },
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "70",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-14T14:20:29-08:00",
        "LastUpdatedTime": "2026-01-14T14:20:29-08:00"
      },
      "FullyQualifiedName": "Test",
      "CompanyName": "Test",
      "DisplayName": "Test",
      "PrintOnCheckName": "Test",
      "Active": true,
      "V4IDPseudonym": "0020732000aedb35dd49a7abb2a2015ec1f679"
    },
    {
      "Taxable": true,
      "BillAddr": {
        "Id": "87",
        "Line1": "1919 Locke Ct"
      },
      "Job": false,
      "BillWithParent": false,
      "Balance": 0,
      "BalanceWithJobs": 0,
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PreferredDeliveryMethod": "None",
      "IsProject": false,
      "ClientEntityId": "0",
      "domain": "QBO",
      "sparse": false,
      "Id": "75",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-02-10T08:59:50-08:00",
        "LastUpdatedTime": "2026-02-10T09:08:23-08:00"
      },
      "FullyQualifiedName": "Wendy Warren",
      "DisplayName": "Wendy Warren",
      "PrintOnCheckName": "Wendy Warren",
      "Active": true,
      "V4IDPseudonym": "00207327b39f13379046a3acc65716a2263194",
      "PrimaryPhone": {
        "FreeFormNumber": "+13344672631"
      },
      "Mobile": {
        "FreeFormNumber": "+13344672631"
      },
      "PrimaryEmailAddr": {
        "Address": "wawarren1919@gmail.com"
      }
    }
  ],
  "payments": [
    {
      "CustomerRef": {
        "value": "75",
        "name": "Wendy Warren"
      },
      "DepositToAccountRef": {
        "value": "18"
      },
      "PaymentMethodRef": {
        "value": "4"
      },
      "CreditCardPayment": {
        "CreditChargeInfo": {
          "NameOnAcct": "Wendy Warren",
          "Amount": 257.5,
          "ProcessPayment": true
        },
        "CreditChargeResponse": {
          "CCTransId": "1arwbha76244",
          "Status": "Completed",
          "CardSecurityCodeMatch": "NotAvailable",
          "AvsStreet": "Fail",
          "AvsZip": "Fail"
        }
      },
      "TotalAmt": 257.5,
      "UnappliedAmt": 0,
      "ProcessPayment": true,
      "domain": "QBO",
      "sparse": false,
      "Id": "526",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-02-10T09:08:23-08:00",
        "LastUpdatedTime": "2026-02-10T09:08:23-08:00"
      },
      "TxnDate": "2026-02-10",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "Paid via QuickBooks Payments: Payment ID 1arwbha76244",
      "LinkedTxn": [
        {
          "TxnId": "527",
          "TxnType": "Deposit"
        }
      ],
      "Line": [
        {
          "Amount": 257.5,
          "LinkedTxn": [
            {
              "TxnId": "525",
              "TxnType": "Invoice"
            }
          ],
          "LineEx": {
            "any": [
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnId",
                  "Value": "525"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnOpenBalance",
                  "Value": "257.50"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnReferenceNumber",
                  "Value": "1027"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              }
            ]
          }
        }
      ],
      "TxnSource": "EInvoice"
    },
    {
      "CustomerRef": {
        "value": "71",
        "name": "Connor Dunn"
      },
      "DepositToAccountRef": {
        "value": "113"
      },
      "TotalAmt": 390.0,
      "UnappliedAmt": 0,
      "ProcessPayment": false,
      "domain": "QBO",
      "sparse": false,
      "Id": "515",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-02-04T11:37:59-08:00",
        "LastUpdatedTime": "2026-02-04T11:37:59-08:00"
      },
      "TxnDate": "2026-01-20",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "Line": [
        {
          "Amount": 390.0,
          "LinkedTxn": [
            {
              "TxnId": "510",
              "TxnType": "Invoice"
            }
          ],
          "LineEx": {
            "any": [
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnId",
                  "Value": "510"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnOpenBalance",
                  "Value": "390.00"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnReferenceNumber",
                  "Value": "1025"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              }
            ]
          }
        }
      ]
    },
    {
      "CustomerRef": {
        "value": "72",
        "name": "Jaime Felipe"
      },
      "DepositToAccountRef": {
        "value": "113"
      },
      "TotalAmt": 250.0,
      "UnappliedAmt": 0,
      "ProcessPayment": false,
      "domain": "QBO",
      "sparse": false,
      "Id": "514",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-02-04T11:37:56-08:00",
        "LastUpdatedTime": "2026-02-04T11:37:56-08:00"
      },
      "TxnDate": "2026-01-20",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "Line": [
        {
          "Amount": 250.0,
          "LinkedTxn": [
            {
              "TxnId": "513",
              "TxnType": "Invoice"
            }
          ],
          "LineEx": {
            "any": [
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnId",
                  "Value": "513"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnOpenBalance",
                  "Value": "250.00"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnReferenceNumber",
                  "Value": "1026"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              }
            ]
          }
        }
      ]
    },
    {
      "CustomerRef": {
        "value": "69",
        "name": "Marian Harper"
      },
      "DepositToAccountRef": {
        "value": "113"
      },
      "TotalAmt": 190.0,
      "UnappliedAmt": 0,
      "ProcessPayment": false,
      "domain": "QBO",
      "sparse": false,
      "Id": "494",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2026-01-12T06:52:42-08:00",
        "LastUpdatedTime": "2026-01-12T06:52:42-08:00"
      },
      "TxnDate": "2026-01-06",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "Line": [
        {
          "Amount": 190.0,
          "LinkedTxn": [
            {
              "TxnId": "493",
              "TxnType": "Invoice"
            }
          ],
          "LineEx": {
            "any": [
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnId",
                  "Value": "493"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnOpenBalance",
                  "Value": "190.00"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnReferenceNumber",
                  "Value": "1024"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              }
            ]
          }
        }
      ]
    },
    {
      "CustomerRef": {
        "value": "48",
        "name": "Buddy Coburn"
      },
      "DepositToAccountRef": {
        "value": "8"
      },
      "PaymentMethodRef": {
        "value": "1"
      },
      "TotalAmt": 379.0,
      "UnappliedAmt": 0,
      "ProcessPayment": false,
      "domain": "QBO",
      "sparse": false,
      "Id": "199",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2025-12-11T13:49:11-08:00",
        "LastUpdatedTime": "2026-01-16T03:53:20-08:00"
      },
      "TxnDate": "2025-12-11",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "Line": [
        {
          "Amount": 379.0,
          "LinkedTxn": [
            {
              "TxnId": "198",
              "TxnType": "Invoice"
            }
          ],
          "LineEx": {
            "any": [
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnId",
                  "Value": "198"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnOpenBalance",
                  "Value": "379.00"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnReferenceNumber",
                  "Value": "1021"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              }
            ]
          }
        }
      ]
    },
    {
      "CustomerRef": {
        "value": "45",
        "name": "Keith Cooper"
      },
      "DepositToAccountRef": {
        "value": "18"
      },
      "PaymentMethodRef": {
        "value": "6"
      },
      "CreditCardPayment": {
        "CreditChargeInfo": {
          "NameOnAcct": "Keith E Cooper",
          "Amount": 257.48,
          "ProcessPayment": true
        },
        "CreditChargeResponse": {
          "CCTransId": "MQ0292453433",
          "Status": "Completed",
          "CardSecurityCodeMatch": "NotAvailable",
          "AvsStreet": "Fail",
          "AvsZip": "Fail"
        }
      },
      "TotalAmt": 257.48,
      "UnappliedAmt": 0,
      "ProcessPayment": true,
      "domain": "QBO",
      "sparse": false,
      "Id": "193",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-11-22T07:45:53-08:00",
        "LastUpdatedTime": "2025-11-22T07:45:53-08:00"
      },
      "TxnDate": "2025-11-22",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "Paid via QuickBooks Payments: Payment ID 109085",
      "LinkedTxn": [
        {
          "TxnId": "194",
          "TxnType": "Deposit"
        }
      ],
      "Line": [
        {
          "Amount": 257.48,
          "LinkedTxn": [
            {
              "TxnId": "192",
              "TxnType": "Invoice"
            }
          ],
          "LineEx": {
            "any": [
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnId",
                  "Value": "192"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnOpenBalance",
                  "Value": "257.48"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnReferenceNumber",
                  "Value": "1019"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              }
            ]
          }
        }
      ],
      "TxnSource": "EInvoice"
    },
    {
      "CustomerRef": {
        "value": "47",
        "name": "Russell Suther"
      },
      "DepositToAccountRef": {
        "value": "18"
      },
      "PaymentMethodRef": {
        "value": "3"
      },
      "CreditCardPayment": {
        "CreditChargeInfo": {
          "Number": "xxxxxxxxxxxx1664",
          "CcExpiryMonth": 10,
          "CcExpiryYear": 2026,
          "Amount": 349.0,
          "ProcessPayment": true
        },
        "CreditChargeResponse": {
          "CCTransId": "1ad3ekefi95w",
          "Status": "Completed",
          "CardSecurityCodeMatch": "NotAvailable",
          "AuthCode": "07971C",
          "AvsStreet": "Fail",
          "AvsZip": "Fail",
          "TxnAuthorizationTime": "2025-11-14T00:00:00-08:00"
        }
      },
      "TotalAmt": 349.0,
      "UnappliedAmt": 0,
      "ProcessPayment": true,
      "domain": "QBO",
      "sparse": false,
      "Id": "188",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-11-14T14:39:33-08:00",
        "LastUpdatedTime": "2025-11-14T14:39:33-08:00"
      },
      "TxnDate": "2025-11-14",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "LinkedTxn": [
        {
          "TxnId": "189",
          "TxnType": "Deposit"
        }
      ],
      "Line": [
        {
          "Amount": 349.0,
          "LinkedTxn": [
            {
              "TxnId": "186",
              "TxnType": "Invoice"
            }
          ],
          "LineEx": {
            "any": [
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnId",
                  "Value": "186"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnOpenBalance",
                  "Value": "349.00"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnReferenceNumber",
                  "Value": "1016"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              }
            ]
          }
        }
      ],
      "TxnSource": "QBMobile"
    },
    {
      "CustomerRef": {
        "value": "43",
        "name": "Bee Jackson"
      },
      "DepositToAccountRef": {
        "value": "18"
      },
      "PaymentMethodRef": {
        "value": "3"
      },
      "CreditCardPayment": {
        "CreditChargeInfo": {
          "Number": "xxxxxxxxxxxx1685",
          "CcExpiryMonth": 8,
          "CcExpiryYear": 2029,
          "Amount": 50.0,
          "ProcessPayment": true
        },
        "CreditChargeResponse": {
          "CCTransId": "1aa1eufjn3sl",
          "Status": "Completed",
          "CardSecurityCodeMatch": "NotAvailable",
          "AuthCode": "015070",
          "AvsStreet": "Fail",
          "AvsZip": "Fail",
          "TxnAuthorizationTime": "2025-10-09T00:00:00-07:00"
        }
      },
      "TotalAmt": 50.0,
      "UnappliedAmt": 0,
      "ProcessPayment": true,
      "domain": "QBO",
      "sparse": false,
      "Id": "176",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-10-09T15:34:42-07:00",
        "LastUpdatedTime": "2025-10-09T15:34:42-07:00"
      },
      "TxnDate": "2025-10-09",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "LinkedTxn": [
        {
          "TxnId": "179",
          "TxnType": "Deposit"
        }
      ],
      "Line": [
        {
          "Amount": 50.0,
          "LinkedTxn": [
            {
              "TxnId": "175",
              "TxnType": "Invoice"
            }
          ],
          "LineEx": {
            "any": [
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnId",
                  "Value": "175"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnOpenBalance",
                  "Value": "50.00"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnReferenceNumber",
                  "Value": "1010"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              }
            ]
          }
        }
      ],
      "TxnSource": "QBMobile"
    },
    {
      "CustomerRef": {
        "value": "40",
        "name": "Nagaraj"
      },
      "DepositToAccountRef": {
        "value": "18"
      },
      "PaymentMethodRef": {
        "value": "3"
      },
      "CreditCardPayment": {
        "CreditChargeInfo": {
          "Number": "xxxxxxxxxxxx4310",
          "CcExpiryMonth": 1,
          "CcExpiryYear": 2026,
          "Amount": 200.0,
          "ProcessPayment": true
        },
        "CreditChargeResponse": {
          "CCTransId": "1aa12drbsh0t",
          "Status": "Completed",
          "CardSecurityCodeMatch": "NotAvailable",
          "AuthCode": "09423D",
          "AvsStreet": "Fail",
          "AvsZip": "Fail",
          "TxnAuthorizationTime": "2025-10-09T00:00:00-07:00"
        }
      },
      "TotalAmt": 200.0,
      "UnappliedAmt": 0,
      "ProcessPayment": true,
      "domain": "QBO",
      "sparse": false,
      "Id": "174",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2025-10-09T13:53:15-07:00",
        "LastUpdatedTime": "2025-10-09T13:53:15-07:00"
      },
      "TxnDate": "2025-10-09",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "LinkedTxn": [
        {
          "TxnId": "177",
          "TxnType": "Deposit"
        }
      ],
      "Line": [
        {
          "Amount": 200.0,
          "LinkedTxn": [
            {
              "TxnId": "170",
              "TxnType": "Invoice"
            }
          ],
          "LineEx": {
            "any": [
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnId",
                  "Value": "170"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnOpenBalance",
                  "Value": "200.00"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnReferenceNumber",
                  "Value": "1008"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              }
            ]
          }
        }
      ],
      "TxnSource": "QBMobile"
    },
    {
      "CustomerRef": {
        "value": "40",
        "name": "Nagaraj"
      },
      "DepositToAccountRef": {
        "value": "18"
      },
      "PaymentMethodRef": {
        "value": "3"
      },
      "CreditCardPayment": {
        "CreditChargeInfo": {
          "Number": "xxxxxxxxxxxx4310",
          "CcExpiryMonth": 1,
          "CcExpiryYear": 2026,
          "Amount": 150.0,
          "ProcessPayment": true
        },
        "CreditChargeResponse": {
          "CCTransId": "1a90okoha48f",
          "Status": "Completed",
          "CardSecurityCodeMatch": "NotAvailable",
          "AuthCode": "00496D",
          "AvsStreet": "Fail",
          "AvsZip": "Fail",
          "TxnAuthorizationTime": "2025-09-30T00:00:00-07:00"
        }
      },
      "TotalAmt": 150.0,
      "UnappliedAmt": 0,
      "ProcessPayment": true,
      "domain": "QBO",
      "sparse": false,
      "Id": "45",
      "SyncToken": "2",
      "MetaData": {
        "CreateTime": "2025-09-30T13:33:50-07:00",
        "LastUpdatedTime": "2025-09-30T14:48:22-07:00"
      },
      "TxnDate": "2025-09-30",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "LinkedTxn": [
        {
          "TxnId": "171",
          "TxnType": "Deposit"
        }
      ],
      "Line": [
        {
          "Amount": 150.0,
          "LinkedTxn": [
            {
              "TxnId": "170",
              "TxnType": "Invoice"
            }
          ],
          "LineEx": {
            "any": [
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnId",
                  "Value": "170"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnOpenBalance",
                  "Value": "150.00"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnReferenceNumber",
                  "Value": "1008"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              }
            ]
          }
        }
      ],
      "TxnSource": "INTUITMASPAYMENT"
    },
    {
      "CustomerRef": {
        "value": "38",
        "name": "Rick Elm"
      },
      "DepositToAccountRef": {
        "value": "8"
      },
      "PaymentMethodRef": {
        "value": "4"
      },
      "CreditCardPayment": {
        "CreditChargeInfo": {
          "NameOnAcct": "Heather Elm",
          "Amount": 1199.0,
          "ProcessPayment": true
        },
        "CreditChargeResponse": {
          "CCTransId": "1arcfscf58498149",
          "Status": "Completed",
          "CardSecurityCodeMatch": "NotAvailable",
          "AvsStreet": "Fail",
          "AvsZip": "Fail",
          "TxnAuthorizationTime": "2026-01-16T00:00:00-08:00"
        }
      },
      "TotalAmt": 1199.0,
      "UnappliedAmt": 0,
      "ProcessPayment": true,
      "domain": "QBO",
      "sparse": false,
      "Id": "42",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2025-07-21T12:51:24-07:00",
        "LastUpdatedTime": "2026-01-16T03:53:01-08:00"
      },
      "TxnDate": "2025-07-21",
      "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
      },
      "PrivateNote": "Paid via QuickBooks Payments: Payment ID 1arcfscf58498149",
      "Line": [
        {
          "Amount": 1199.0,
          "LinkedTxn": [
            {
              "TxnId": "41",
              "TxnType": "Invoice"
            }
          ],
          "LineEx": {
            "any": [
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnId",
                  "Value": "41"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnOpenBalance",
                  "Value": "1199.00"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnReferenceNumber",
                  "Value": "1007"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              }
            ]
          }
        }
      ],
      "TxnSource": "INTUITMASPAYMENT"
    }
  ]
};
window.qbData = window.QB_DATA;

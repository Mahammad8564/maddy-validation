import { Validation } from './validation';

export { Validation } from './validation';
export { FieldValidation } from './model/field.model';
 
 

var b = { 
    "isActive" : true,
    "blocks" : [ 
        {
            "name" : "Block title",
            "title" : "Mini App 1",
            "instructionForUser" : {
                "instructionType" : 1
            },
            "sections" : [ 
                {
                    "title" : "Section 1",
                    "name" : "",
                    "layout" : 100,
                    "isMaster" : false,
                    "isActive" : true,
                    "category" : [],
                    "instructionForUser" : {
                        "instructionType" : 1
                    },
                    "fields" : [ 
                        {
                            "autoCalculated" : {},
                            "default" : {
                                "enabled" : true,
                                "type" : ""
                            },
                            "instructionForUser" : {
                                "instructionType" : 1
                            },
                            "type" : {
                                "name" : "number",
                                "title" : "Number",
                                "metadata" : {}
                            },
                            "validation" : {
                                "required" : {
                                    "enabled" : false,
                                    "message" : "222 is required"
                                },
                                "condition" : {
                                    "enabled" : true,
                                    "type" : "gt",
                                    "min" : {
                                        "type" : "value",
                                        "value" : "45"
                                    },
                                    "max" : {}
                                },
                                "mask" : {
                                    "enabled" : false
                                },
                                "pattern" : {
                                    "enabled" : false
                                },
                                "validationSet" : {
                                    "enabled" : false
                                }
                            },
                            "isActive" : true,
                            "indexNo" : 0,
                            "uid" : "1545209468511",
                            "isEncrypted" : false,
                            "encrypted" : false,
                            "unique" : false,
                            "disabled" : false,
                            "key" : false,
                            "linked" : {},
                            "optional" : false,
                            "title" : "saurabh",
                            "acceptanceCriteria" : [ 
                                {
                                    "criteria" : {
                                        "isAdvanced" : false,
                                        "isField" : false,
                                        "condition" : "=="
                                    },
                                    "condition" : []
                                }
                            ]
                        },
                        {
                            "autoCalculated" : {},
                            "default" : {
                                "enabled" : true,
                                "type" : ""
                            },
                            "instructionForUser" : {
                                "instructionType" : 1
                            },
                            "type" : {
                                "name" : "number",
                                "title" : "Number",
                                "metadata" : {}
                            },
                            "validation" : {
                                "required" : {
                                    "enabled" : false,
                                    "message" : "222 is required"
                                },
                                "condition" : {
                                    "enabled" : true,
                                    "type" : "gt",
                                    "min" : {
                                        "type" : "value",
                                        "value" : "55"
                                    },
                                    "max" : {}
                                },
                                "mask" : {
                                    "enabled" : false
                                },
                                "pattern" : {
                                    "enabled" : false
                                },
                                "validationSet" : {
                                    "enabled" : false
                                }
                            },
                            "isActive" : true,
                            "indexNo" : 0,
                            "uid" : "1545209468512",
                            "isEncrypted" : false,
                            "encrypted" : false,
                            "unique" : false,
                            "disabled" : false,
                            "key" : false,
                            "linked" : {},
                            "optional" : false,
                            "title" : "saurabh",
                            "acceptanceCriteria" : [ 
                                {
                                    "criteria" : {
                                        "isAdvanced" : false,
                                        "isField" : false,
                                        "condition" : "=="
                                    },
                                    "condition" : []
                                }
                            ]
                        },
                        {
                            "autoCalculated" : {},
                            "default" : {
                                "enabled" : true,
                                "type" : ""
                            },
                            "instructionForUser" : {
                                "instructionType" : 1
                            },
                            "type" : {
                                "name" : "number",
                                "title" : "Number",
                                "metadata" : {}
                            },
                            "validation" : {
                                "required" : {
                                    "enabled" : false,
                                    "message" : "222 is required"
                                },
                                "condition" : {
                                    "enabled" : true,
                                    "type" : "gt",
                                    "min" : {
                                        "type" : "value",
                                        "value" : "14"
                                    },
                                    "max" : {}
                                },
                                "mask" : {
                                    "enabled" : false
                                },
                                "pattern" : {
                                    "enabled" : false
                                },
                                "validationSet" : {
                                    "enabled" : false
                                }
                            },
                            "isActive" : true,
                            "indexNo" : 0,
                            "uid" : "1545209468513",
                            "isEncrypted" : false,
                            "encrypted" : false,
                            "unique" : false,
                            "disabled" : false,
                            "key" : false,
                            "linked" : {},
                            "optional" : false,
                            "title" : "222",
                            "acceptanceCriteria" : [ 
                                {
                                    "criteria" : {
                                        "isAdvanced" : false,
                                        "isField" : false,
                                        "condition" : "=="
                                    },
                                    "condition" : []
                                }
                            ]
                        },
                    ],
                    "indexNo" : 0,
                    "uid" : "1545209468512"
                }
            ],
            "indexNo" : 0,
            "uid" : "1545209468513"
        }
    ],
    "instructionForUser" : {
        "instructionType" : 1
    },
    "title" : "test222",
    "isDeleted" : false,
    "isCurrent" : true,
    "client" : "perfeqta4", 
    "version" : 1
}
var a= {
    "1545209468511" : "51",
    "1545209468512" : "70",
    "1545209468513":''
}
console.log(Validation.validateWithGroup(a,b));

// export const Greeter = (name: string) => `Hello ${name}`;
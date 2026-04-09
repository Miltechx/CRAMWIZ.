import React, { useState, useEffect, useCallback, useRef } from 'react'
import Head from 'next/head'

// ============================================================
// SEED CODES - 1000 pre-generated access codes
// ============================================================
const SEED_CODES = {"CW-ET6JELXH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EGYJWTU9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6RSYZTCR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VPLDWKCP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-G4LE4LYZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7JMR9BTX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EPUFYFLN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GL8LMH83": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2FY2WUSZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MMGTZQUC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8L44HF7G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2QZTP799": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YJMJSSAN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KQ6YP5BP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-B7YMWBEA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TDLEMCEW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EULTCWRS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MAVBHX3T": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EQ7VRK6Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JRU9MD36": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7UJGS7LY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4BTFEA33": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JE5ZKYVE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N7YGFMLS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GHBPFZMU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J6S7NGXS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EFE6MMNQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2K5W74PR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z6J9WWER": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K4GRW7BN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2XPAUNC8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YCYA4LE6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9DKXRF9C": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KEES3LVG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DQ8TNAWT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AYG9D6Z5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4XGWTUFC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YCPRU5G7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QKNDQF9S": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4M28BSQJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7J4QLNR6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-78X9LZP5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3HD43E2U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LQVR36JU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HTDEB7NR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8TCSKVS2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BCXM4FP9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BXT4FF95": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9KQGGQ7P": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-F8LG9282": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FF885X2Y": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BLWMJZ2G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DPU6U6ZZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-F85NH42A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BE8S2DR2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MJ5C9EMW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z3XDLBG9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QGHYBAFT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J4WTU2TJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MF6RB5BY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DW3BQDUN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RQVXCADH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3ZK2AS46": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3N8MJNMW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2JL637W6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SMS26WNL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P678G63H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-99W5FE5A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PWNBLQVD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P8BJJDWK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NVRK6ARB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AY79DU9X": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GYACRKZR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-G3LVWZ58": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EDHCJHFM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7JG4V2WT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HCS5FGA3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-R2XK4T9Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J5PQKDKJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZW8SHHT3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ALSRA6XF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LGJHL83H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NW97ZQ5C": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8VYSFJKV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HYQN2GQ8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GFXK72GN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XU5G5SN7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4LW5KMNF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4TTTE73F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3S77TXYB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GL4WKQ7Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PXXCBLQ9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KHE35J94": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CJ5KVGQ8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HNEKD3AE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3VP4NLXX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UUTRA7BN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AT4CL78B": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WMJXBHKB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5CAY5YM4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GWDR6P3T": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EJQ6ND4W": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4YYKX53H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J9XJEVQ6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2HRZQ2J5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZNYWAVQZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PTQBCQLN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VB7XN9SD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UQKVTE3N": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VB42DQ3Z": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HBH5S9EE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KNDP58UF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GQ8C4F4N": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HT2PZ5AC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5ZJBUD3G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KPTMJDNR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S4HNWLQS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VDJGMTXH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TYNLLUQL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-55PLJ8JN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-E8MN923U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EWYSYHUU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WXTR65WR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AJKXZ99P": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HA7M79JR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PVJ4QSQW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BS695ETJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EXMQUS4R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FSQ9PUWQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-264CRXNL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DT9CP5V7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9W95HQ4M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BC8NB7AT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9VXMMT9L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NRX4ND4J": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5Q7UYW9R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-C2H9MNJN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NZHG9S73": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YHWD2P4L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5NV9VYB3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H7KN5V98": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GLCKCAX6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DU8XTKGY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J2ZBTJGW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MBAZRUSQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RXSANA85": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MLH4QJ7F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6VUZH7TL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UC7QHDWG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ANME956K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KFGQNE3W": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LWUS29N3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FMBJDEFX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MABLHRD7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5UM4D98J": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KMLZGT7V": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LHDCZT3Z": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6PDK5YEP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-B5XPG2KR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GS3E3X5F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-E946F5SM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TE3GETUR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3VG5C7UP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9SS276QT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PEFKUBXW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DHDCRSH6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5L923P64": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QTZ38YFY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Q9XZS64V": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SRE7JTZ8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7NW4X6CK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M86EFG9X": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7JTGCTM3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8MNF2U73": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XW24XCDN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-38V76TBZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P9HHQH86": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Q9X8FYUB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8RE8E9SB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RUV464GV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9TMX4WEU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H6RQU3RD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-T8U3GJT9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-C4ZVVCKL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KTEEWW9H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N37LALK5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P3ATMDHA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FSR9TXUC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HKW62949": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GZP2QQZR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GY8MLL4M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Y7Y6F8EX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DVFTLEZY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-U7UADXHY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VJPQWGMS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PMNXEAXP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TSLRT49F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SKLEZWXL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SN9526TE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Y944RKRK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3LGSZJQ8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ASCGED2L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-X5PDYDHK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CDMUVGRF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YPZ22MEX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MPS5E6PG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WMB2RHDE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-549YPXB9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9WCXYPYG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UBAHNXUJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HMKPG2B6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SWQUNUWS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PY56HAPF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-U3STXNTQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PMT5ECB3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CMRKEVX7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6UWV2U53": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VPSTJWMF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LGBM65E2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5Z7J64BQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AQA9Q3J4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PMV5S94B": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YHTP8A9J": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Y7JSRWNC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8F3RYTSA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-F6HGQ2QE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CJW2PTW6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-49TSD6TG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4BGTUGGF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HZUCLFWY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3NPVSZ99": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KYU7EDRA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SAR6J7T9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2N55C3FF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZVC7CMCN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7A4PH568": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-T7B926RP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-E4YXRUHW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6YC7APYW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NFLQLEPG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VW6L3UQ6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BAM6UVLE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3N8VKEK6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YADUE8AW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5U2JHEU5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GRY4WW6T": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HKVEK3L3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HYBPDBFF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EHLYKDG5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8GV9BMDZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AG6QPN6J": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GDP6UECR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-D6HCXWJL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-U3DXGGB4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-C9NXFLZT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VLQN8ZND": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Y7YT8A3V": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HT3GHM6D": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-W8G5Y2DY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-D97MXBSS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FWV6RDJ9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FJUM3HP3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M2ULNGWF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BXE6LHW3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LVLJ53LE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KYRBJP6N": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZJLUFRVB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H95YL444": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-54KVU4YR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7QAWGTFX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-L322QKRF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TJB7RJXC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GAGQ57AZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P5RCLWVA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S7TNGLF9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J2BSL8HB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2TVX7N5K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-88MQ579E": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-G9JNZ4YN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EC5BBKGV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-47BCNXZB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GK3722HQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-85SVVW9N": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S3WB8MWB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SW43R932": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4MW9YRXQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DETWUAJC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K6VUDU6F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3BHFZW5Z": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZWQP2L2G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EQA9SBB5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XCTDCR9E": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FGD5R2R3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WYRUF6M2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4M8MLWTR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FKMJL8TT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z588CXJA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UUB5ZCJD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PQ6PLCMS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VVZNJNRJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AQD9Y2WH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KLWU8KXW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TWRJS29R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YT7NBEFN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XW8V6ENE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VGJVETKY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WMBKF62Y": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8TXX3WQF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KMHJ4G8A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2PCGMCS4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4749H96C": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CFB8SEUD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-78BX8H9N": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RYCBR4V3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2VXZR7W5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-86U3EAL7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J7AKUGT3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UQDVL2JZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DKQFSKHX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-747JLMBF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YAVWDWPG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZVVNKS5K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6QRM2VY7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2J6PR2SN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JPBAF4B3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UB5C6WKM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V45MKB9M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5NY69Q5Y": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8HXR5ZB4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MF2V4LQW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RCS2G2VH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XCRB4U5P": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EKVQJLRS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YWU5G5VB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H55EWLE6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P87VY5DS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RVZST9QM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZJTTQ4WR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8T5RQW82": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5W7GQ2WM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-G95VDVBQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-U87VQDSJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NPQJSMDG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-B4FT2Z28": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VMQYK2XN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HHSWYUEX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-F8LHPUUU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3EGEBEXF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RTMHSMV9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N8YGZLFQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z6HV8ERN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-89RQ2M4K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RVMGMX8V": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MV4MK48P": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FMDDUJA7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WMD6N228": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QD9ABC78": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FHT5PMKS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8ACSBCPH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3R2RJP9L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HV93H5ZH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2NWZ3YJ6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-APFMSYF2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZKNESASP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SNX6YSLR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S3JZ2UZJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SBQDSQ7M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8NH4LS5L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WWASZLQE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8PDYCCAX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TTD6RFHG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z3X4AWR7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BQYLXR62": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-W49NGJBY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ESA79BMW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4S4588QV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FA8JNA2L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4AQYFHJG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KQBAH6AA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8HS9TTQ9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-F947X2UH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CJDAZTXS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-57EHLP8L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J96RUAGT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RKTB28B8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SHCHVAEA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4ZTVY658": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PJNWL95B": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EZWJZUA2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NF7SA8XB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9GJZRKQU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WYQJL38T": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VD3W34A7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8FUTGFK6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TWV46S4N": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J3AXH85G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-W6LLDK2Z": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-U3JAUDU2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EA8MCBD5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2PACPNGN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VYDQZ3EN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZSEYCSHJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GMZLVMNU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-697LQWTG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-32666YDW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-29CAY32E": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-F6SNENVD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z8X3VB5D": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FFL3WBDB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PSRNCMHQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H3Q3KS37": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5D3WFUPW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NUQV5NC9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-G472F4T3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EBVPVE67": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XX49Q7MD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MQXNMY3L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UTD3KQHC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BKFF9C4H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z87P48XR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EP6KGPDK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CRSHGCS3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A3NNEPY4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-439ZBCPF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-D3AJC9LH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZNFAGF6H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6PFUU99E": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YWU9DESQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Q67PXK7Y": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XZD8ADF2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FBD6V6AV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MG78CGNK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z4EUVCNM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VS386A6J": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JJFBYNLS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8LQXEB7V": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZGLPXKSW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8DDPG23T": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PEE8L24G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FAECC57K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FBBRAQGZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KSY6PXC8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MRQ3R4GB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JJE97YKU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TDRBYMPD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GXA82M39": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GSWR8Q8L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7BFS9ZL4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H3ENYSW4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PBUPXQUQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NMD5JWHX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JMDJJBC3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DRRQDR82": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HDCEDXMJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5B6C5CWJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MACGCJAJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-F4KXAGPN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K9MT27FG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-L2B6CF63": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MXJR6BAK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CQALG5PB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KRZ69R5J": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GYKPC7ZH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TBFSVUEJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WWJZPKAN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AUBKWEWT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5A3X74EK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TP7YYYZQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6RN6R86K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MRDAP7L8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DEJ7BVAM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9VT5B6ZC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WN84A6DQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-D76WKC77": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-D3RXJEGT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A8YNXJAN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MSU39TU6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MDF3RESU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YLVK26YT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2F7KYAZM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-R97PCRMR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZB82Z875": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MFR3HRC9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TCCUFWT7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JVTJJUMT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UAZUDZRZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JT3P7QHS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2XA394B7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KFVXHLDD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MAW2DV8L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-347SCY88": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HX46NYTK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZTZM93TZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PWRAAKYT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TMFXU7UY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZPNR37FD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-X6PJGBUJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FSHB28X4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6UWHDE8G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8SCBAMVL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HE4GQP4U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EVADPM65": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TTNR9DLW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BV45342P": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VK6JG9PQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FP2HRY7B": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DE28ZFGM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YSMBF9HC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YMXDB285": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XBYZ2YT9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7ZF8ED5G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7DA6J2D3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TVNV5Z5W": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YZV6XJ43": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZS9ZUV4N": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-66DQZ4UK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6XT3T5BR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A6S2PZ8E": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H7332P3N": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7CAQWWF7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V2Z7MA6G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5GBYVBMJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UADVRAP8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M2YLYNPT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DGSVHQ73": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DT9SZZV6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YEC4P5TR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZNG5A4GJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-65DAZJ42": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JZ3SLEXJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-574ZFLEA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-89WN23FL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9XXA43GL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TWR3ETMG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V88QU796": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RXMHVT9D": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J8R98TGQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BVU6YCNA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LMPLD6W2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GFYGUXK6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TRQH78BP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UPDY2VTB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WZ5B6YHK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4HP3HWFM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PYJZ6C6N": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VTP67T4U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8UQJ4ALE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9VNL3CKH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A8H6QXPC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KQ5AEK8K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YTPSY3PN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7STKN6QW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-B5K29KS6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2RRBKXYX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4YXRDP4E": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BMPYFDH2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XHS2GAJP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-R4EE7736": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MADFRLDR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VL82NCHY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NA2P53Q7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7X68ARYD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FC6BKJDW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AGXTJNZ6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YNUGFG8F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SW59GY22": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Y3NVM6QL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GHSZRUJN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FLM69AVN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZAE44QNR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NHNN8FEK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BHK3FF6Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8VZZUTHB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UZUHVEYY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QMVG6C4W": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UFA3SKU4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6CPQ62KC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2DQ87SH9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SH8QBGTK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZTPACAEM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PLYNXG2U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MBXUUJ5J": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7AGUJ66M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-666BLUYP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YB88UH3Z": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HSEV7FWA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Q6SE2CQ8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7SNJN6JS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8FWP2AFP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZUGAM7XE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-C4BUJMNW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HJG2NFBW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6AQ34MM4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-U5B6WFDG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WMKLC64E": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WMP467LG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QUHZYC9C": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6YRD329L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3JMMHWQB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5DS9V7JG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AE7MSQVR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V3L3LJLP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5CUQT6GB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-226WDV8K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZRULPRY9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M7GDGQVS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JW5N7B5J": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V6JPERFP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XNYVL5LA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7T7QH68H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-49D8HGHM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QLWXCQ6R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A2N64APJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5MEQDRNU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TFTQCTQK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BD9N5R76": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JZ7T7889": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P3C4K2J3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NZAN2KK8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4JDYKAH4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EH7ZL3HM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AZB8Z9L7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-L46QKFTS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P2Z4JBB5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RA2DM9U4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-R6UEFKWU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KCF6DAZB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S6JG48UV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K5EEXPC4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LKQY3N67": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-B2K3FD6U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-D5D2C4PU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UFS72M49": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-T64SPBRA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HNQK4P97": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6YQPQBWG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PRA6M722": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-THXHFY2A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VHNMQ634": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WDUB5Z5T": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SURQFFRX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QB8B65S3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J8G5ADLN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-C9C5GHS2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2AV473R2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FBAUVSBQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WTHCFTMT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TWMAT2MD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2QRXTWTP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XU22YAQC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CQRL5F2Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QTN8WKYN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-86CBPKVR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SAGDUR54": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FMQPCPD3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9SMMC2QH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TSQDT3S5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BJXUKP4B": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FNT6VBAB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XLS2EBAN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QVRYKJ3F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2QE8TVEE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RGMARFVX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZWLCAAZZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9LDMRFAN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XVJHMG2R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QU94FKNQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9FBD5BU9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WG8FY432": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A76KD6KG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MTBBJZJ8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RJ82GFH4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FPN6GKLT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DMJBP4QK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TNZEQ5PP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GQPLN7CK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QSB9B4GW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WYVZYULM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-72XQQ6M5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EMSD22Q7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ETJGD4LW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-39CXF39W": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DVMQXQFS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6646WVF2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-F29BG8A8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XFFZHPU8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LBCXPGHE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YP7P5U3M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LV43NM3A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9FGNWHB5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4TH8EJ4W": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NS7F7DCC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Q8JCHX9L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WRTWZXUS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DYJEYRYL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M2US58T4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5JDSB4ZZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2WCG7EBR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2VRVYFPA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZQ2GL7WL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VNFVGN7Y": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AN6RFNQQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6ZH8TL4A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-32293JC4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PDPH28B5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZRLYPAWM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4RVYMPBR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LX7TC47W": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HWU3JKRV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M2CHDAW2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WWPRKY6Z": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FS752FVH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MUQM233J": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8RN6X2EU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EHYBQRNR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZUZXRK6H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5JDVF4R7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RU8BTDTE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2HABY5B7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GNPFMEAY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UN59KBMG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-E87JSH6R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QLX92CKZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LQUY9U49": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KCPYVZUC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RFR2B6ZY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DWB8BQQ6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-L7S3PZJ8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-R3YMCCL7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N3798XJB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-C9KCKS5H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-62VFYBZ5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6LQU7ZYV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QTAH9XRL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SZPT4N66": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4JZTEKTW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S92XKCKZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YBQP77E9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LGQU48LV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PXEC2W7U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K3JDN54H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-L4YLFCQS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RE68T274": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-B8BSLF55": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JYHAUADM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VQUAEWKS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6YBK28KZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-REGH7XKS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KQWJCE4Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Y7D9NE2U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N9R5FQRW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-292QLB77": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-B2QGHVWW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YWJYERZB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CGZLKVUH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CBGJGH77": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7AWQ8DE4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-779CKGNL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MWZ9EXW3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-US483EMA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VYDS77YH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PNR9Y6WT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KGQQKLNS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NCWQVCQV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BWQQKCKK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-L9QUQXRA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6Z5BS9LM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RXQQBTGL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DPAGVUQW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VZZW3M8R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8R92JJUG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-92DHM2DR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2KZZMCHS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TC2ZK7XY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7ZMDKE4U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-269JLMWW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CGXD7DFG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N85DFLC9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5F9S8KYY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A2JUM65Z": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ELDA77YV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7BSYUGQJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NHZWTJ74": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-F2RV6VZV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9UUP7CYW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-THE4MTT9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NKD5X3NY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TLDFRTEW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-62M786QL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ERA366SE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KW6AJSJW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-98LU7SJ8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4MKY5K3L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WU9RNH7H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VYB9ULJ4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7NA264AK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-442CDZ3G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6U5FA9WU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-E67UN74A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SPA83XN7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-998V5K29": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YF4FXL53": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H4TKDSZN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AGL6G4PL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KVQDF53T": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3NNAG96U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-X6QQHYUZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GTLC3LQH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RHFYTYRQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GPRKQRHM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CRQK7MEY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-27YCUXC9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5QMHZR8V": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8BF46HRX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YPDKA69J": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3X3BGEJ7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5CNDGSC4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TZGN3XHN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GEEY89SH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M4EFGCF2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6D25DLF6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EQ6HZQEU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7NK58Q72": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-L7Z84JTQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-E4XD46JV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6U54B94K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KT3XYSXS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VZEJLBPJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TE5PMFR9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8ACSKW9U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CYH9RFDC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-83GUZNX8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8QD7ZQZ4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J56V4D7B": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CDEUNFWC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-U5LD8P24": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BHGNJEV2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BEKJHQ64": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-C8P4VHR6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-T85BKYSE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LW2WVMDM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P4V7XFSH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S2NWM4UA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XZ822CR8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-E88ANFT2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-T44PG3WY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WT62PTF4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KH7NYLBP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QCAWQSD8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6NQNSGUL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7MKVK5YK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V3MVRDWF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QGZHK8KX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BVD7HRX6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PCMA2W7D": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QYKE4775": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4R4HV5LN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WLWNYQ2L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2L9UGGVY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M57NAHTZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-258PTSTF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NPZ99KE4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9DBYDQY7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MB4CD3KB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EE2GMSPS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TF5XXKK8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZKBH3433": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HU234DV3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V2QM2T76": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8X68XDQP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KSDPFE93": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-255RLKUU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6HUHA8SG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UBZS7E3A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KF832WL5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3JHBQKSD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NNGC43KT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5BNB4TGK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M7SL65PZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BPUEMPXA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NEL3VKAB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KGYQWVSQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2TSKGRU8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NVE4L9SN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZFQMUH6H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FJS4LHUF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K9W9UT6C": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HCPJ7TV9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VRHF3WEJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S4FM8CW5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V3MSLGHC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YDVA4MF7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7A9HT3BN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GJWMX3S4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-L3JPWYPN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7R9ZRG2Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-C7T2U582": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HT2FFXCX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-T94XPQCU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-W5DLBARA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XTLH6YVF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-84NMCR4U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RGSA7ENZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-453TCV3L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PT3CT3NZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9S2A5BCY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BY4URY99": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-L99DQBE9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JVPGT8JH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AJTV6SJH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TV83QKYS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RG29FEC6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5VPTHKRQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CKQPDRRK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KQGXC8RW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9PRCUNYP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6P9WE2EE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VJQHSYTA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-64WS8MPY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6GNYNA7K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9G6LCMV4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Y45VULLD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PX5X3DGU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z232H7FZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-33WLC6AM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-X28BZJ4G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CXGQ2P69": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LZW34WTE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GVPQFU6V": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-77MPN4PC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SLYLA4KN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WEDT6Y6R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZDEMGJC3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P4VQJ5KF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PZ7LEDFN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4WN8LYQT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DRJ2FN8P": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9ML9K5S4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2DCXDCJL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TFWZGRJD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6WXMLN9A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-633NR2KT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5N462SV4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Y9Z6A48B": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TXGU846N": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M3CV2ESC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VUZAK6EU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YVK3XHYY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DBLQY3UZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DDFF7FBY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H6NA3X7P": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CK234FBU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3ZQKBXPV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9H3R4PQD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-57JJXB4K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7ZPE5UZL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3KZ663UH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QTPXM2WX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S6SV6MJ7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MQNHE9ET": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LCT77VF8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K375U2MH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XXTZCT97": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J33P6CVH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ND3Z7RYH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LWFQAL2P": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FNZTN2UB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BV399EER": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NLTZ6EL8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8UUP2K2A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UP5AQWEA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EDC8DETA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z755J2NX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FR4W72FE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-REDJJV6M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4AREQBV3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZGAQPWGD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UEN4AMAV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TPWTNYHB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XBFGYAQ2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-URFGXYAX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H5G93ASM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K6QZV9T9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5TT5SZF7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DVVA2DHC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Q8KGRHGS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JSZ9EPTG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HDB8JST2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LN4K9GYZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-T6BDB6SE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-69HDTAQJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TCXX5ASF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6G7ZUAV8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-B2VNMBGW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TSVVWN28": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ECUT4BT3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GPJAKEND": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HBZV2678": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WEXGMM3M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4BRJU7BX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-896B3ECG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AS64EMKV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-R5GX35CB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YRZG6E82": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YPU7Y2BP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SUFT2HNL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BZ45FGS5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J6DMM98X": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Y28DJMXT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SVTPSUV5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VBSGFYEN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HEU9N5X8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2VZXG47A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JTRVCL8Y": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HZYVKQ88": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2BMF7AA4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MWGAUQSZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DGE9CZ8Y": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YCH3HYP2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6CKVAHBQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JTW8H55F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BK9SCAFP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-W28H5PCG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Q22HZ9EA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-38L9UBC4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XVG33EFM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z3F4HK5C": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-R6DBNDW8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M79DZYPN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VJZDCUDY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JGV8HUTP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NJBDFXRZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HG8K8U5Z": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FS6Q2D5R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5XFEEF4E": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XNKRDS9J": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TJELFUCQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GLAA5256": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NRGS2VSV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XW4STDSA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A4B5DPTN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XWFMCPQ4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XGS5338G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A8F2DWYS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KEN37GQP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CMPX9338": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CLBU6NXK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6FNQKB6R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PCHFST9Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BJEPK7HT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FY5DXG53": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8H5J4UYA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WV6APWW9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ADVXWJYJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WG84ATX2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V828NMVR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8R943EBW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P59N4G6P": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NK7DJG97": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CBVESZQ5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ECML2Q6W": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WFDVC2TG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HFHEZ8RS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-25CLTZPH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VZJ5EVL9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QP2C5J87": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XNKPNYLF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6WBZVXTD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6WYXP3X6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TBSKQDLJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZTCQ3MF9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QKG9SSAN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EME3LGVX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WNCNBEYT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JTYHM6W4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4XNZAFH5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P7USHB74": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WPAZ956T": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QGBRUC2R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NWSJ8D2R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-X4PMM33G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-976UBC2K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WN5RRAAE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2C2K8AWE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3MJ7RVYQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YD9QFGKE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UTU9N3RG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GNX5XVVF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-932VE24D": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AVHGKN9E": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-E438G5DE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XWEMDWGP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-X4ND99VX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PUPA6C3E": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WHNZL4VU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JES9TUE7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VJ3FGLLJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-G7UQMXXD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YCQL68WU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-X5NDSHNS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-748AFPLH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MSDH6XXE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-T33PGRNM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V8DYED6S": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JWJE9GU2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KUJXZK3A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S4DMGH6C": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-L63U6PNA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4MAPQZJD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M5FTZTDQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-D4C7LSBW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZXPVWG3P": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YZR8YYGK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M32Q8LDE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5BSYRYNB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K5UKVNLF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RMBJZLFH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S6Y8BFZ3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8MED6FFP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6ACV2GA9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AQFXCB55": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-452AH2B7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2LWPQCTH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N6AXUJ89": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5SLSVUUN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ARSY2B5M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FES99ASY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V9KV25C9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZB4EMPJW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MFNG4KPR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GSYZYNRD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5B27K677": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A6HUTSCU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-T2EAQAWL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FHENYVNH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V9JFZKJY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8NB7BXTN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZBDS7MSR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K2XL8YVG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H3DHEEFC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GN3VFS25": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7T7CMXYY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CXNNWAA3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J58T5A4C": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-49CH5WFY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-R69978PW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H7HDWDS8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-47E4KPFP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-X5QJ246E": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TDKZX9RQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8G5UYEMG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MXW46VGF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AUKWRLPC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JC8SJWHG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PC2A8FMQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-D5ZF3R48": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GS353V6L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YMBDT88Z": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-F5CTNSP2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2AMR56L9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JRS2RJXT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KAS55PPG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6GEC7XQN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-22Z6CXKL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UKHJTWR2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JVX8ZCNX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RR3N9HHV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GSJ2FX5U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2NU3784K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9N6NVWVZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J9D2R5GT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JYLYANHN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V8QQUMJX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NZ99Z6WP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9QCATAJ2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2PCRRT7U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SZE3HF98": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-USMPXENM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J7HVPW34": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-F736PCSV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Y397F638": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HWMZJGL9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-86QZASC4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YDPZ7VQ2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AMQX92MN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YDXK2QAH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-55EXCARY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LE7HGRCA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PSC3DC93": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KBD5BJUX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RHYXB53R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7GZ8LY8F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EGNKPASE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-B6ZJGFXV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MSCXDYGR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VA89FVWR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PMYQZZK6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KQ9P46CN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JSFWFLV8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XXJBPDHG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HT77GZHA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BAT5732T": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-34J53S32": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-26F35RZN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z7M2D47A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MC22L4G4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-B8A2CYEY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KKZ2N3DV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-G88L9YFG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DZLXMEBW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-D4UPVSPX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VD2JZY7M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YU4X4RLD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A5GRVK65": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-T9EXUETF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MPBLC8DM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6DLYTKRZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J9PT6GTS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-R5ERL5B3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZTG35LPH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YHSFEL6H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4DP28LDH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GVE6Z85M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6RMR6J38": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7Z5QBSJE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HLEXEXF3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WWFW9U73": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S5GQPC3B": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-954QVC6Z": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CTVRB45S": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K98EPBR6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SK5HJ627": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AQXC4CRZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4AVNGCXE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7MA4C7CH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BN6P2JD5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K6J95W4K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WG4AAVPP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TTM9F88E": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-B629YGYC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-R9MZ2TZS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LU7CRQB3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-R4G42ZAN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-D79U7MWT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VE4RLDR8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YZ7HFCGS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2AZHHYFM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YLJV7ZLF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7KXAAR67": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N2GGAJHA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NUXZ8BUV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SXW9UD87": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PFY57X8F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CY92W4N5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-L7D3CWBM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3W5ULWY7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MPATPD8A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6CNM6ZP5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VWWS6ALS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2UTPGL3N": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M63G3VHS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FV69J5ZK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AJNUYUYZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-68UAFBB6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A5RRFHQ9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NXTR5PJZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZXL7K469": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SMBLTZTL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4Z75ZA63": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-L3PDVHBY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P3YRQG5K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6KBVEGPQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EHB5LNY7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WJA6JPEX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JPL7Z25U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WAJF8GQH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MHT6S3NY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BVJSQZ9Z": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8DGQVBWZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KXJKEVVM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S5VAUPP3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-75E9BTJW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V6AWLXQD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PGG883PM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WJJZ5TQ7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SW6C9JVN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NWTVBVTD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-78K7AMJZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4JGHX3V8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7N5L7XJN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TTDUTMJR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z8QCDD54": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BMRD3C4K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WTSFTW5B": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9C74NWWX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TEHKNABP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-36W52F4T": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AR6QLERC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ACBFQ3RW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-R9CAJWVS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-G4LGDU6E": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XC3F7QAB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-35HKASSW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9WMKNVTX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TVC3UKG6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N7NVXZUR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ESJLXRFB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3VTVQ9FJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P673KL2D": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MQXN6NM9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2ERS53ZS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SPLCY45Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Y4DZX32X": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-L8DT5V9G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HYVQR3NQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3WVT9Y4U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KQASYBT4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J3JYRPDJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TZ7MZHRJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2BGU6H5M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SBQBD3CX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FEG9YA7S": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DFG79AZY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DMC8DHU9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UUA7MEX3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6SGVK69U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NZRZ97WW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PKBL7WGG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-L242UBP6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A9UB4PN8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FPYJ7E6U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZEKMVFSD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z6CRRY2F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WZ9DSCWY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N3P4YC27": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3A3F6HPN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Y3HLUWDP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-T99ELK8Y": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-87MDEBD3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-864UC43D": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PJ2GV64H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3AJJNVF8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EVKBU4YJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3MQ9VKK5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2BNW7TX3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8HVRJ6NB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-F6EQ4TC7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-B678HH3J": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Q9FTSWMU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YDYJQ4P7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Q46R5CRD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VUG7K5GD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FFEL98L9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RHRHN22D": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J2JYU9V3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YRPEPS2D": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JVWQPBH5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-C2Y8DUSL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LQHYYT9R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6PYSM6TM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M56DV965": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SNUS2HWY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CE9HVYMK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UFUTBX4X": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EGALG8A2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-W2F5CB3B": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8MPK63UK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Y7N6ZFV4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KMWD74RA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GQT585XG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8U7QGTHZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EWAFJ8EU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-C2TM87EQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4A56HNZD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-32S7ECR7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SV8LTETY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-X4TYZMRE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KDQYGAPU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UKHHXWSL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S6CWEQ2H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z842RVGB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CU7JP34V": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4PAQHFLR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9HZAXM3L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FUM387UU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QUU63W6L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YP25ZUSY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AQVTYZEC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z3SB3R4H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7BWCTKBX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RV7UD23Z": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-58P9EVTX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9NUPJHKQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TGAP7RGA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-URP2ER3Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-F8KMHR5F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AFYHJ8G5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-B22MTBHU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A44RFYMV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CPELDGPB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SLZS9Y5W": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JQYX2S2F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-G9G5792R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BQBVFUZB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-49MR5LYL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6HQDA9QX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XDD2WBKT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VS6EGR4U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JRXLWFQG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-D85RX2M9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4GS72RJN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BNXDFSHR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZEYKR9XE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SRERWBBP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KXLCAKA2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TFJPNSXD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QWLN4W9R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-R4VDUDCR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2WUTEHUS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CTTJ9DR5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QR463V4C": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NS5EVZ2X": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CNPK767M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-48VBCPC2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NR9ZFZWL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PBSWZCPF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H3Q274ML": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-576GN9VK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9AWCGPK9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z3TAPW42": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PRUFECUJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KZ5F7XB7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UUNWLN2G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-T8ZVXSUN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FEWHUJ3Y": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-G4ERLEF9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LF3AXRHL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VV9CLKL8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-G8PD99ST": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7DBYJYQZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J6Q3LM7F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GAKYFVW2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S4WGPF75": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JGCD5D6C": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UT92QEP4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A3JANH5T": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LUB776LH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GA4JQE3T": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KRFSMRXE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RDKAAT9G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RVAJFHQQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KH5R2VGS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6LHTR2MY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-B9P3U6YH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RGKXRE4R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6TKFQ8UH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3H4DZCS9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TQ56UNQN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K5DKKUKV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DHXFW4ET": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VCYJ9UJZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P8UJBHAP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WGCZZTEK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LV7NSCFC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-24QNDSVV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YFPRZ4V3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WM8D8WU5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YKE6KCEJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A9UZE2TG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RMXVL6HW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SSAP3DZ8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-G6EF4RE9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ML77MZ74": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PZSBQAZY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-G3NXGUSG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DRFYNQN3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KT6AVBXL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AVREKHSN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KTHFNURA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HBFDAT9M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M98S48YJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LEAKERMT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4VDRFRWM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N7DP9MRL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Y28BQEV5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CTQ7XTJ3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SJGY4T5T": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4RJ8GR6R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-L8AC8BKV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QXJAZ3PD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-76WH42T6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P7L3XN25": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-B6YU649M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-C4YC3RG9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-D82JCUVX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LCY7Z8LX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JSMEVQYN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ACREY4DV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DRSDG9LX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-66L57D8H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-D243UMQD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QEHGCU34": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FJV6FA3Y": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RB2PDGXL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3EPW8PW3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XKMEGQ45": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KVLJ6KTZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H3LXN2XX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UGHGWLFX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ES6HD3KQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-63WYYGWN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N5HX983B": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RG69VGVF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YDW6HSQV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7GZTBEG4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FM2987M7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WHX9GFPW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KD7PKT46": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-G69HNC4C": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XXEWA2H2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N9XNHWXV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QVYFX992": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QHZCU2G7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3TV8LYGZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4KHJSKPU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-24XR8RNV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XQJJ42VA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FNG4JTKJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8HZU8LV3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K7NEMGJY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WYNTRALN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ME8BQQD7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9N523XXQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-68UKHFNP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8ZGUU6WD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SPN2SBUQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-D6HYYRL4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-74KE6SWK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-G74PUZF5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EMNTSEG9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H5KKSZZF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8BN5ZKWG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DPESAEPN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5JE9TZ3L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H2ZLMZDX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2A9QLY8X": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7J9865QR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H98AQDWK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z4F3Q3VB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J5M6APXM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KX8E872F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NJHEFD4R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UDRM73C5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5Q3WPKE9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DJPEHKFN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-X4AHA9C3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A68LKJZ8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NVZMXGKG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5EMC38JX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3EKH6T35": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4WH5YP8A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DU7XAERH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YJ4EQCH6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TBQ5BMJL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-R7Y8E8BU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZBDKWRVC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-89JGYEQ6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DQJAYMUR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-W665HBTL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-F6DCLYA2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZFEP2CPJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6MFR3K69": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N4VBACBQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MGRP4CXA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P9VHEA99": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GHPSCQTY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P82YFS4D": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UCJSRZLZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-STWN8K2Y": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XPWZUKTB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YKANBFGF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7BD7FKX3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MVSF3XG3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XCQDYEAF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9W7ECXJX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HAVQXNPQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EL3T9GYZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DJRV6SM5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7ZNWHY6L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WLMR6CJ4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7MJJ3UWD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EK7YLCZH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LLCCNKM6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H8QHBPLA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QAQKF4YR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JNGYG2JJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2DN9PTNW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZPXDPY76": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-47KX832Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-R8NBAPVV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UXQBSU4Z": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5VY88SS8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NYKG2E5W": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LAPTR2BF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S9CTA4Y2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AY8P3GEP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NPXCKMVL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K36LHMLW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ETF7YE7M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-96LW3RB7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-X4KKAMU2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9SDHZL92": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AZTK73VX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-33UDP64R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6E6NYF6P": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8CVKXR8L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DKF77BT4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-95V27V3H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HPPSDPSS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VZC3VZU2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WE6K3R9U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SWWKPHBB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9VFEVGE2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7EHZHN7Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XU5VSWL7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AQLXPJ5M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2SLV69EQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QRSZ2TQV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M4SZGF2E": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MM3ALCT6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AWY9KBJ6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BPR66PJK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JY3QT373": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4WJRL4JH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EYFJAR3P": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-J8AGUQ2Y": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PWPWT696": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UJXXABQU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YPMHZ5VG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K2RVUZKK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2KJ84GXG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-28M5J62N": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SEE3EKPZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JALNK8R2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LJJJWBSR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-F3BP669M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MWRX6PDA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-T7E7JRGZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-U558NA6Y": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SP6B6SZ8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EBJ9Y2YC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YFAF5DP8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6YYVQNSJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BW4VSPJK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZV78C87D": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FPTZGRZ7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HSNRTA9M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PBEDA2PE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HHJE76ZR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EVYQ4DKA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NG8KLXZ4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NU4YSX35": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PQ94GY9M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GNAGLTJE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9T4HSLTD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7VAWSYU5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7W7NY3K6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VXK7ETLA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XTQJ2ETJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CAETXTTC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-499EMSL8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S8MH6YJ6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6AGJB74T": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FCZDTBCC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AEEQJHLV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2MC4AS55": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AK34KTKD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HAKKAPZS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BMNZ7XRL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8L9HLAZN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9N6UMT4U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KGNPT8QE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K46VNRBP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HCDJRKBE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6E9ZJR8J": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2S3UW5JE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-C2GSFX9L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SQY6KK2F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WC7ZP9Q4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-C2T7MTHN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QKZDZJUS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-T8N2P2MS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DSDUJA6D": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3Z5Z4E2J": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-73YJNQYC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7C752GY8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GWS7UP5E": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7E3ARGKQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YZWSWJ5G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5Z7DBVE2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2BLM9Z7A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9EQ6KRFN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WLW6RZV5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HRZJZ95B": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GBDA5PLP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LFSN26DL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Q94JU6YW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EER44SHS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PXEKBVVV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RM66YPNJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UBXQCVX9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XV5RDKGG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DT2FVYYN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V3GRUM8E": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3MEVEPZ9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-U6MYQNMD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LZ6H5FC7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PJT366SA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZRE7QND9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BMR3GM7U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VWUADKU3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-94EM5WYQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XJQ69X4Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AQ86FHGS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RP9Y9W3R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z37A2K2C": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PAJ3QUSY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HQ5R5HU9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NVQ4VZQH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2NP52ZWC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TCUHCW8S": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7T2P72FW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3WBHDCAV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZX8ZVS46": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HC4QUL8A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-W7N4NSSK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-35SHAYRX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5QVCCBW3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TKXRWP9F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M5XBHDXT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VAYMVSF8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RVMFEFC6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BHECUXQH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7HC93TG8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QDUNHMWC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UVFEKJER": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-65KPUGTV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JR8DA67F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YVWUJ6M8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XNJAAPAQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NKZZDK22": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LBRW3MKL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N8ZY6CSQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-983K8V46": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-REZ3QJ5C": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VJUETTEH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P7LHDAGB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WETLWAHG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-74A9F48Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SULUR5CA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TF8843TT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N27BG4LL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6F4B32UW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A5USVLZA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8TRWE2Q7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LQSVFC9Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SHXP4CMS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RUJ7LY25": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UKH2DVEX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GQPYEMDF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CXB22LAC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-524L5UTS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-83A4J4TP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MM4ZBEAC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-94KHEA9A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AFDNVBQD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DTXCLGFS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H9GWERW8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BJKL7HC7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3F2TPLUP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LCJBHPKL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V7T6ZXPW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BHAM3N8S": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MVKDPB6U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TH3MDQBT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BSPLWRZ9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZYXJVQJX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N7VQ6ZP9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-72LS7Z6K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WAM8SD77": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MGTFZG47": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SLC6YVGE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MATH66LG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JGTXR9XX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VBHVNJSJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2S48FEWG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-96XXPGKW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6SVULPWF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-T468X63R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2DKFFW7T": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UNTGHG2A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3TBREEKF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LJ7YVJ3N": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-STYW3TC5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3HHMNP2R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WGJZDYW2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JEUVWN33": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-CRZUH9R5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S9E8KG85": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-P7M492HX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QAW4WZUX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9ZLUM3NJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-C32VRUXV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SA6MLHJ6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GYH6ZCL4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2DDJP3S8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KN6GHQUM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RSYALTRX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TRBFF9QT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QVGPH8NL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-L2QNT3Y6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3YSSGL82": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6W6CCTFL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-79KTPMXE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VAPZETKY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TNMW88ET": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N9M7QSQY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9KFC4A4Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-DJ48MDEG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H36BELY2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A8Z5A44X": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6EL7ZSVF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6WLP4FJD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PNNB6VHL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-976KU87L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YBNDWZG3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-LHSX3HUS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QEAPSU92": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KVB2BDXY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PV73GML7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UV9Y8UB7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YSTLWMY4": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HMUVBF8D": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HLQF354U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8RF5WXQU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XQNAN7HY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5DSNCCCM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5CQS6LX6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZU5NDVGU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-B46DU6NV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3MP36TG5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EK7MWXY7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UL253K3V": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6LMZKK3C": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PWG55YH5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S7ZUNDAY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BQ2Q8KAP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3YC3RMWY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EC73C4L9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-64ZZYR8L": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MV5L8V4A": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-W94GT7ZA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VV33EE6F": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3PHXJQFS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-G4VE4B5C": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SF2VG5BF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XD3BEJGH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZAQSZPBV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3KXGMXVV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K62ESTTK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AYQXKXNV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BZFKYAQX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Q6VXTAV6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WQ3XKN86": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SJG9SGXZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UM92MJ5S": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-C5LA3LUF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3W2EFU9K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MWC5G9XG": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ATLXPQPF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9DQR2WTC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TXN6TP8G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V63BDSVX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PD6BLF7E": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-856PR6JY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-XQ7UTB29": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FF5KNUJB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BP7FF5N6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HUNBMCS3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-UH2CJQNU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JFK9V3PA": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A8JSP8VT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8JQGCFSY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-W488434H": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FB38L3FQ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-78D4U7SP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8LWB8QNM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-94NHR3XK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NSYXGQXP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-W4Y9264Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4PP5JHDW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WDSY98H9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WF3AHLFN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Q3FZZJHH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-74E8RFS8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-86C4XJ9G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FCKPRPS2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M4RENW3G": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GFEVHWDD": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HDGU8HB5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5T6KJTMF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SBLX65DE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-K3UBSTEF": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TYUMZHL6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H93L8V36": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SQH573MH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4ZXNCDRE": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-YFQP2LTM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PRU4NRUR": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-E9MT2UTJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-BJCFGWRV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VLCLK7FC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-X66KB9HS": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-7SWZ53NP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-U6EQMY7U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HG388XRM": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z52CXZ9P": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KY3TGKXN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-D9U44G47": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-54SM9NJL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JMXAXGDH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3NFFED35": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HLJ93N6Z": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HDUMJZTC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MJ7P6XYP": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-48MZFZUL": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-FUAJBHF5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JP353U54": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VZ6BD9G5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-SP89DF93": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-945UD8TB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-3WSX2VC2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4G3EHMWY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6DNAEVY8": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-B5KYHC9U": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-GMHVR5EV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NESJ3CM6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VGKXJF48": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NSFMLMFU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-TN5HU562": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-WKRLGD3N": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JZHXCAQ2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-T39JVHGU": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HM4DPHUB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-32EL7N94": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HQDYG4JY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-AMHRBY2X": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-58E4S2NW": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-EPV7RBPK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JRPHWD4Z": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5NNQ5WM7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-4NBTMP29": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ASALFSTB": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-6DWSD54Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HFLY868Q": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-5ALR8TA2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JQXHFAE9": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ZLC2YCPZ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-45BW2Y7X": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-H6UMGLG6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NFJ6UL2W": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A2J3YPF2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-S3NBCDW5": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ADCJSJG6": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-MWXCJ3XT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-JG9LZBCH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-W2BT2DV2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ANKPS2V2": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8TWYHYXY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-9N8RAPFK": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-G4LJLN6M": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2ZQ5TUZX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-A66KKVU7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-N9WB4UMH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-RS982WXT": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-M2G6RV5R": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-VHW2YH2C": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-2RP884A3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-V54UY4FY": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-T4GHQKLX": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-ENUPUJC7": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-66RBJBGN": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-NJKEUGJH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-68R8ZVZ3": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-HSVRLKMV": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-QJQCMTWJ": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-8FACT42K": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-Z6PK8BUC": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-KPMSVPFH": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}, "CW-PV6F8Y82": {"used": false, "createdAt": "2025-01-01T00:00:00.000Z"}};

// ============================================================
// STYLES
// ============================================================
const S = {
  nav: {position:'sticky',top:0,zIndex:300,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 28px',borderBottom:'1px solid var(--wf)',background:'rgba(8,8,15,.95)',backdropFilter:'blur(20px)'},
  logo: {display:'flex',alignItems:'center',gap:10,cursor:'pointer'},
  logoImg: {height:32,width:'auto',objectFit:'contain'},
  page: {position:'relative',zIndex:1,minHeight:'100vh'},
  btn: {fontFamily:'var(--fn)',fontWeight:600,fontSize:'.875rem',padding:'10px 20px',borderRadius:'var(--rs)',border:'none',cursor:'pointer',transition:'var(--tr)',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:6,whiteSpace:'nowrap',position:'relative',zIndex:5},
  btnPrimary: {background:'var(--blue)',color:'#fff',boxShadow:'0 0 24px rgba(26,108,255,.3)'},
  btnOutline: {background:'transparent',color:'var(--white)',border:'1px solid var(--wf)'},
  btnGhost: {background:'transparent',color:'var(--wd)',border:'none'},
  btnDanger: {background:'transparent',color:'var(--red)',border:'1px solid var(--red)'},
  btnLg: {padding:'13px 28px',fontSize:'1rem',borderRadius:'var(--r)'},
  btnFull: {width:'100%'},
  card: {background:'var(--b2)',border:'1px solid var(--wf)',borderRadius:'var(--r)',padding:22,transition:'var(--tr)'},
  cardBlue: {background:'linear-gradient(135deg,var(--b2),#0a1830)',border:'1px solid var(--bd)',borderRadius:'var(--r)',padding:22},
  input: {width:'100%',background:'var(--b3)',border:'1px solid var(--wf)',color:'var(--white)',padding:'11px 14px',borderRadius:'var(--rs)',fontFamily:'var(--fn)',fontSize:'.9rem',outline:'none'},
  label: {display:'block',fontSize:'.75rem',fontWeight:600,color:'var(--wd)',marginBottom:6,letterSpacing:'.3px',textTransform:'uppercase'},
  alert: {padding:'11px 15px',borderRadius:'var(--rs)',fontSize:'.85rem',marginBottom:12,display:'flex',alignItems:'flex-start',gap:8,lineHeight:1.5},
  alertError: {background:'rgba(255,77,109,.1)',border:'1px solid rgba(255,77,109,.3)',color:'#ff8fa3'},
  alertSuccess: {background:'rgba(0,214,143,.1)',border:'1px solid rgba(0,214,143,.25)',color:'var(--green)'},
  alertInfo: {background:'rgba(26,108,255,.1)',border:'1px solid var(--bd)',color:'var(--bb)'},
  alertWarn: {background:'rgba(245,166,35,.1)',border:'1px solid rgba(245,166,35,.25)',color:'var(--gold)'},
  badge: {display:'inline-flex',alignItems:'center',padding:'3px 9px',borderRadius:100,fontSize:'.68rem',fontFamily:'var(--fm)',fontWeight:700,letterSpacing:'.3px',textTransform:'uppercase'},
  uploadZone: {border:'2px dashed var(--wf)',borderRadius:'var(--r)',padding:'36px 20px',textAlign:'center',cursor:'pointer',transition:'var(--tr)',background:'var(--b2)',position:'relative',overflow:'hidden'},
  loaderRing: {width:40,height:40,border:'3px solid var(--b4)',borderTopColor:'var(--bb)',borderRadius:'50%',animation:'spin .75s linear infinite'},
  qItem: {borderLeft:'2px solid var(--blue)',padding:'14px 16px',marginBottom:10,background:'var(--b4)',borderRadius:'0 var(--rs) var(--rs) 0'},
  resultBlock: {background:'var(--b3)',border:'1px solid var(--wf)',borderRadius:'var(--r)',padding:18,marginBottom:12},
};

// ============================================================
// DB helper (localStorage)
// ============================================================
// ============================================================
// DATABASE LAYER
// Shared keys (users/codes/subs/ambassadors/feedback/seeded)
// → stored on server via /api/db (Upstash Redis)
// Personal keys (results/solved/mapping/notes/posts/user)
// → stored in localStorage (per-device, fine for personal data)
// ============================================================
const SHARED_KEYS = ['users','codes','subs','ambassadors','feedback','seeded','announcement'];

// ── DB: localStorage for personal data (results, notes, session) ─────────────
const DB = {
  get: (k) => { try { return JSON.parse(localStorage.getItem('cw3_'+k)) } catch { return null } },
  set: (k, v) => { try { localStorage.setItem('cw3_'+k, JSON.stringify(v)) } catch {} },
  del: (k) => { try { localStorage.removeItem('cw3_'+k) } catch {} },
};

// ── SDB: server-side Redis for shared data (users, codes, subs, ambassadors) ─
// Secret: works with NEXT_PUBLIC_CW_DB_SECRET or cw_dev_secret env var names
const _SDB_SECRET = process.env.NEXT_PUBLIC_CW_DB_SECRET || process.env.NEXT_PUBLIC_cw_dev_secret || 'cw_dev_secret';
const SDB = {
  get: async (key) => {
    try {
      const res = await fetch('/api/db', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'get', key }),
      });
      const data = await res.json();
      return data.value ?? null;
    } catch { return null; }
  },
  set: async (key, value) => {
    try {
      await fetch('/api/db', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'set', key, value, secret: _SDB_SECRET }),
      });
    } catch (e) { console.error('SDB.set error:', e); }
  },
  setReceipt: async (id, dataUrl) => {
    try {
      await fetch('/api/db', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'set_receipt', receiptId: id, value: dataUrl, secret: _SDB_SECRET }),
      });
    } catch {}
  },
  getReceipt: async (id) => {
    try {
      const res = await fetch('/api/db', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'get_receipt', receiptId: id }),
      });
      const data = await res.json();
      return data.value ?? null;
    } catch { return null; }
  },
};

// Async server DB for shared data — see SDB definition above


// ============================================================
// AI CALL - goes through our secure Next.js API route
// ============================================================
async function aiCall(prompt, maxTokens = 2000) {
  const res = await fetch('/api/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, maxTokens }),
  });
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e.error || 'API error ' + res.status);
  }
  const data = await res.json();
  const raw = (data.result || '').replace(/^```json\n?|^```\n?|```\s*$/gm, '').trim();

  // Try direct parse first
  try { return JSON.parse(raw); } catch {}

  // Extract the outermost { ... } block — handles trailing text after JSON
  const start = raw.indexOf('{');
  if (start !== -1) {
    let depth = 0, end = -1;
    for (let i = start; i < raw.length; i++) {
      if (raw[i] === '{') depth++;
      else if (raw[i] === '}') { depth--; if (depth === 0) { end = i; break; } }
    }
    if (end !== -1) {
      try { return JSON.parse(raw.slice(start, end + 1)); } catch {}
    }
  }

  // Last resort — find anything that looks like JSON
  const m = raw.match(/\{[\s\S]*\}/);
  if (m) { try { return JSON.parse(m[0]); } catch {} }

  throw new Error('Could not parse AI response. Please try again.');
}

// Plain text AI call — for assignments (no JSON parsing)
async function aiCallText(prompt, maxTokens = 4000) {
  const res = await fetch('/api/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, maxTokens, returnRaw: true }),
  });
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e.error || 'API error ' + res.status);
  }
  const data = await res.json();
  return data.result || '';
}

// ============================================================
// PDF EXPORT UTILITY
// Opens a clean print window styled like a document
// ============================================================
function exportToPDF(title, htmlContent, userName = '') {
  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8">
<title>${title} — CramWiz</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Georgia, 'Times New Roman', serif; max-width: 800px; margin: 40px auto; padding: 0 32px 60px; color: #111; font-size: 15px; line-height: 1.8; }
  h1 { font-size: 1.6rem; color: #1A6CFF; margin-bottom: 4px; font-family: Arial, sans-serif; }
  h2 { font-size: 1.15rem; color: #1A6CFF; margin: 28px 0 8px; font-family: Arial, sans-serif; border-bottom: 1px solid #e0e8ff; padding-bottom: 4px; }
  h3 { font-size: 1rem; font-weight: 700; margin: 16px 0 4px; }
  p.meta { color: #666; font-size: .85rem; margin-bottom: 32px; font-family: Arial, sans-serif; }
  p { margin-bottom: 10px; }
  ul, ol { padding-left: 20px; margin-bottom: 10px; }
  li { margin-bottom: 5px; }
  .card { background: #f8f9ff; border: 1px solid #dde4ff; border-radius: 6px; padding: 16px 20px; margin-bottom: 16px; }
  .badge { display: inline-block; background: #e8eeff; color: #1A6CFF; border-radius: 4px; padding: 2px 8px; font-size: .78rem; font-family: Arial, sans-serif; font-weight: 700; margin-right: 6px; }
  .badge-green { background: #e6fff5; color: #00a86b; }
  .badge-red { background: #fff0f3; color: #e0144c; }
  .step { font-weight: 700; color: #1A6CFF; }
  hr { border: none; border-top: 1px solid #eee; margin: 20px 0; }
  strong { font-weight: 700; }
  .answer { white-space: pre-wrap; font-family: 'Courier New', monospace; font-size: .88rem; background: #f5f5f5; padding: 10px 14px; border-radius: 4px; margin-top: 6px; }
  .footer { margin-top: 40px; padding-top: 16px; border-top: 1px solid #eee; font-size: .78rem; color: #999; text-align: center; font-family: Arial, sans-serif; }
  @media print { body { margin: 20px; } }
</style></head><body>
<h1>${title}</h1>
<p class="meta">Generated by CramWiz${userName ? ' · ' + userName : ''} · ${new Date().toLocaleDateString('en-NG', {weekday:'long',year:'numeric',month:'long',day:'numeric'})}</p>
<hr/>
${htmlContent}
<div class="footer">CramWiz — AI Study Platform for Nigerian University Students · cramwiz.vercel.app</div>
</body></html>`);
  win.document.close();
  setTimeout(() => win.print(), 600);
}


async function extractPdfText(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      if (file.type === 'application/pdf') {
        try {
          const pdfjsLib = window.pdfjsLib;
          if (!pdfjsLib) { resolve('[PDF.js not loaded]'); return; }
          const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(e.target.result) }).promise;
          let text = '';
          const maxPages = Math.min(pdf.numPages, 200);
          for (let i = 1; i <= maxPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map(x => x.str).join(' ') + '\n';
          }
          if (text.trim().length < 80) text = '[Low quality scan] ' + text;
          resolve(text.slice(0, 38000));
        } catch { resolve('[PDF read error - try a clearer scan]'); }
      } else {
        resolve('[Image uploaded - AI will work from course/topic context provided]');
      }
    };
    if (file.type === 'application/pdf') reader.readAsArrayBuffer(file);
    else reader.readAsDataURL(file);
  });
}

// ============================================================
// SIMPLE HASH
// ============================================================
function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = ((h << 5) - h) + s.charCodeAt(i); h |= 0; }
  return h.toString(36);
}

// ============================================================
// TIME AGO
// ============================================================
function ago(iso) {
  const s = Math.floor((Date.now() - new Date(iso)) / 1000);
  if (s < 60) return 'just now';
  if (s < 3600) return Math.floor(s / 60) + 'm ago';
  if (s < 86400) return Math.floor(s / 3600) + 'h ago';
  return Math.floor(s / 86400) + 'd ago';
}

// ============================================================
// COMPONENTS
// ============================================================

function Btn({ children, onClick, style, disabled, variant = 'primary', size, full }) {
  const base = { ...S.btn };
  if (variant === 'primary') Object.assign(base, S.btnPrimary);
  if (variant === 'outline') Object.assign(base, S.btnOutline);
  if (variant === 'ghost') Object.assign(base, S.btnGhost);
  if (variant === 'danger') Object.assign(base, S.btnDanger);
  if (size === 'lg') Object.assign(base, S.btnLg);
  if (full) Object.assign(base, S.btnFull);
  if (disabled) Object.assign(base, { opacity: .35, cursor: 'not-allowed' });
  return (
    <button style={{ ...base, ...style }} onClick={disabled ? undefined : onClick} disabled={disabled}>
      {children}
    </button>
  );
}

function Alert({ children, type = 'error', style }) {
  const typeStyle = type === 'error' ? S.alertError : type === 'success' ? S.alertSuccess : type === 'warn' ? S.alertWarn : S.alertInfo;
  if (!children) return null;
  return <div style={{ ...S.alert, ...typeStyle, ...style }}>{children}</div>;
}

function Badge({ children, color = 'blue' }) {
  const colors = {
    blue: { background: 'rgba(26,108,255,.15)', color: 'var(--bb)', border: '1px solid var(--bd)' },
    green: { background: 'rgba(0,214,143,.12)', color: 'var(--green)', border: '1px solid rgba(0,214,143,.25)' },
    red: { background: 'rgba(255,77,109,.12)', color: 'var(--red)', border: '1px solid rgba(255,77,109,.25)' },
    gold: { background: 'rgba(245,166,35,.12)', color: 'var(--gold)', border: '1px solid rgba(245,166,35,.25)' },
  };
  return <span style={{ ...S.badge, ...colors[color] }}>{children}</span>;
}

function Input({ label, id, type = 'text', placeholder, value, onChange, style, hint }) {
  return (
    <div style={{ marginBottom: 16 }}>
      {label && <label style={S.label} htmlFor={id}>{label}</label>}
      <input
        id={id} type={type} placeholder={placeholder} value={value}
        onChange={e => onChange(e.target.value)}
        style={{ ...S.input, ...style }}
      />
      {hint && <p style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 4 }}>{hint}</p>}
    </div>
  );
}

function Select({ label, value, onChange, options, style }) {
  return (
    <div style={{ marginBottom: 16 }}>
      {label && <label style={S.label}>{label}</label>}
      <select value={value} onChange={e => onChange(e.target.value)}
        style={{ ...S.input, ...style }}>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

function Loader({ text = 'Working...' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, padding: 40 }}>
      <div style={S.loaderRing} />
      <p style={{ fontFamily: 'var(--fm)', fontSize: '.78rem', color: 'var(--wd)' }}>{text}</p>
    </div>
  );
}

function UploadZone({ label, badge, type, files, onFile }) {
  const [dragOver, setDragOver] = useState(false);
  const f = files[type];
  const handleDrop = (e) => {
    e.preventDefault(); setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) onFile(file, type);
  };
  return (
    <div style={{ marginBottom: 16 }}>
      {label && (
        <div style={{ marginBottom: 8 }}>
          <label style={S.label}>{label}</label>
          {badge && <Badge color={badge === 'Required' ? 'blue' : 'green'}>{badge}</Badge>}
        </div>
      )}
      <div
        style={{
          ...S.uploadZone,
          borderColor: f ? 'var(--green)' : dragOver ? 'var(--blue)' : 'var(--wf)',
          background: f ? 'rgba(0,214,143,.04)' : dragOver ? 'rgba(26,108,255,.04)' : 'var(--b2)',
        }}
        onDragOver={e => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        <input type="file" accept=".pdf,image/*"
          style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }}
          onChange={e => { if (e.target.files[0]) onFile(e.target.files[0], type); }}
        />
        <svg style={{ width: 36, height: 36, margin: '0 auto 10px', color: f ? 'var(--green)' : 'var(--bb)', display: 'block' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          {f
            ? <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            : <><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></>
          }
        </svg>
        <div style={{ fontWeight: 600, fontSize: '.9rem', marginBottom: 4 }}>
          {f ? f.name : 'Click or drag file here'}
        </div>
        <div style={{ fontSize: '.75rem', color: 'var(--wd)', fontFamily: 'var(--fm)' }}>
          {f ? ((f.size / 1048576).toFixed(1) + 'MB — ready') : 'PDF or image · up to 60MB'}
        </div>
      </div>
    </div>
  );
}

function VoiceBtn({ text }) {
  const [speaking, setSpeaking] = useState(false);
  const speak = () => {
    if (speaking) { speechSynthesis.cancel(); setSpeaking(false); return; }
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.9; u.lang = 'en-NG';
    u.onstart = () => setSpeaking(true);
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    speechSynthesis.speak(u);
  };
  return (
    <button onClick={speak} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 13px',
      background: 'var(--b4)', border: `1px solid ${speaking ? 'var(--bb)' : 'var(--wf)'}`,
      borderRadius: 100, fontSize: '.75rem', color: speaking ? 'var(--bb)' : 'var(--wd)',
      cursor: 'pointer', fontFamily: 'var(--fm)', transition: 'var(--tr)',
    }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
      </svg>
      {speaking ? 'Stop' : 'Listen'}
    </button>
  );
}

// ============================================================
// SECTION: LANDING
// ============================================================
function Landing({ onNavigate }) {
  const features = [
    { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', title: 'AI Summarizer', desc: 'Upload 200-page textbooks. Get what matters for the exam in seconds.' },
    { icon: 'M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01', circle: true, title: 'Exam Question Generator', desc: 'Likely exam questions with full model answers — theory, calculations, MCQ.' },
    { icon: 'M22 12 18 12 15 21 9 3 6 12 2 12', poly: true, title: 'Past Question Solver', desc: 'Snap or upload any unsolved past question paper. Every question solved with workings.' },
    { icon: 'M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07', vol: true, title: 'Voice Playback', desc: 'Listen to summaries and answers while commuting. No screen needed.' },
    { icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2', people: true, title: 'Student Community', desc: 'Connect across departments and universities. Share resources and tips.' },
    { icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', title: 'Ambassador Program', desc: 'Spread the word. Earn ₦1,000 for every student you refer.' },
  ];
  return (
    <div style={S.page}>
      <nav style={S.nav}>
        <div style={S.logo}>
          <img src="/logo.png" alt="CramWiz" style={S.logoImg} />
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Btn variant="ghost" onClick={() => onNavigate('login')}>Log In</Btn>
          <Btn onClick={() => onNavigate('subscribe')}>Get Access</Btn>
        </div>
      </nav>

      <section style={{ minHeight: 'calc(100vh - 57px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px 20px 40px', position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: 28 }}>
          <img src="/logo.png" alt="CramWiz" style={{ height: 80, width: 'auto', filter: 'drop-shadow(0 8px 32px rgba(26,108,255,.4))' }} />
        </div>
        <p style={{ fontFamily: 'var(--fm)', fontSize: '.7rem', color: 'var(--bb)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Built for Nigerian university students</p>
        <h1 style={{ fontSize: 'clamp(2rem,5vw,3.8rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: 16, letterSpacing: -2 }}>
          Cram smart.<br /><span style={{ color: 'var(--bb)' }}>Pass like a boss.</span>
        </h1>
        <p style={{ fontSize: '.975rem', color: 'var(--wd)', maxWidth: 480, lineHeight: 1.7, marginBottom: 32 }}>
          The AI that doesn't disappoint. Upload your textbooks, past questions, and notes. Get summaries, exam questions, solutions — instantly. One-time payment. Lifetime access.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 32 }}>
          <Btn size="lg" onClick={() => onNavigate('subscribe')}>Get Started — ₦3,000 Lifetime</Btn>
          <Btn variant="outline" size="lg" onClick={() => onNavigate('login')}>I Have an Account</Btn>
          <Btn variant="ghost" size="lg" onClick={() => onNavigate('about')}>About CramWiz</Btn>
        </div>
        <p style={{ fontSize: '.75rem', color: 'var(--wd)', fontFamily: 'var(--fm)' }}>
          On Android: Open in Chrome → Menu → "Add to Home Screen" to install as app
        </p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 14, padding: '40px 28px', maxWidth: 1080, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {features.map((f, i) => (
          <div key={i} style={{ ...S.card, transition: 'var(--tr)' }}>
            <svg style={{ width: 30, height: 30, color: 'var(--bb)', marginBottom: 12 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              {f.circle ? <><circle cx="12" cy="12" r="10" /><path d={f.icon} /></> : <path d={f.icon} />}
            </svg>
            <div style={{ fontWeight: 700, fontSize: '.9rem', marginBottom: 6 }}>{f.title}</div>
            <div style={{ fontSize: '.78rem', color: 'var(--wd)', lineHeight: 1.6 }}>{f.desc}</div>
          </div>
        ))}
      </section>

      <div style={{ textAlign: 'center', padding: '28px 20px 40px', borderTop: '1px solid var(--wf)', position: 'relative', zIndex: 2 }}>
        <p style={{ fontSize: '.82rem', color: 'var(--wd)' }}>One-time payment of ₦3,000 · Full access until Oct 31, 2026 · One account per payment</p>
        <p style={{ fontSize: '.75rem', color: 'var(--wd)', marginTop: 10 }}>
          <button onClick={() => onNavigate('terms')} style={{ background: 'none', border: 'none', color: 'var(--bb)', cursor: 'pointer', fontSize: '.75rem', textDecoration: 'underline' }}>Terms & Conditions</button>
          {' · '}
          <button onClick={() => onNavigate('about')} style={{ background: 'none', border: 'none', color: 'var(--bb)', cursor: 'pointer', fontSize: '.75rem', textDecoration: 'underline' }}>About CramWiz</button>
        </p>
      </div>
    </div>
  );
}

// ============================================================
// SECTION: TERMS & CONDITIONS
// ============================================================
function Terms({ onNavigate }) {
  const sec = (title, children) => (
    <div style={{ marginBottom: 28 }}>
      <h3 style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--bb)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: .5 }}>{title}</h3>
      <div style={{ fontSize: '.875rem', color: 'var(--wd)', lineHeight: 1.9 }}>{children}</div>
    </div>
  );
  return (
    <div style={S.page}>
      <nav style={S.nav}>
        <div style={S.logo} onClick={() => onNavigate('landing')}><img src="/logo.png" alt="CramWiz" style={S.logoImg} /></div>
        <Btn variant="ghost" onClick={() => onNavigate('landing')}>← Back</Btn>
      </nav>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '40px 24px 80px', position: 'relative', zIndex: 2 }}>
        <Badge color="blue" style={{ marginBottom: 16, display: 'inline-block' }}>Legal Document</Badge>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: -.5, marginBottom: 6 }}>Terms & Conditions</h1>
        <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 8 }}>CramWiz AI Study Platform · cramwiz.vercel.app</p>
        <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 32 }}>Last Updated: April 2026 · Effective: April 2026</p>

        <div style={{ ...S.cardBlue, marginBottom: 28 }}>
          <p style={{ fontSize: '.875rem', lineHeight: 1.8 }}>By accessing or using CramWiz, you agree to be bound by these Terms and Conditions. Please read them carefully before using the platform. If you do not agree, do not use CramWiz.</p>
        </div>

        {sec('1. About CramWiz', <>
          <p>CramWiz is an AI-powered academic study platform built for Nigerian university students. It provides tools including AI summarization, past question solving, assignment assistance, pattern mapping, and voice playback to help students prepare for examinations.</p>
          <p style={{ marginTop: 8 }}>CramWiz is operated by Ibinabo Martins and the CramWiz team, based in Port Harcourt, Rivers State, Nigeria.</p>
        </>)}

        {sec('2. Access Plans & Pricing', <>
          <p><strong style={{ color: 'var(--white)' }}>2.1 Founding Access (Current — April 2026 to October 31, 2026)</strong><br/>
          Users who purchase access during this founding period pay a one-time fee of ₦3,000 and receive full, unrestricted access to all CramWiz features until October 31, 2026. This is the Lifetime Founding Access period.</p>
          <p style={{ marginTop: 10 }}><strong style={{ color: 'var(--white)' }}>2.2 Freemium Plan (From November 1, 2026)</strong><br/>
          After October 31, 2026, founding users who have not subscribed to a paid plan will be automatically moved to the Freemium tier. The Freemium plan includes:</p>
          <ul style={{ paddingLeft: 18, marginTop: 6 }}>
            <li>Maximum 1 document upload per day</li>
            <li>Limited AI query usage</li>
            <li>Access to Community and Notepad features</li>
            <li>No access to Assignment Solver, Pattern Mapping, or Question Bank</li>
          </ul>
          <p style={{ marginTop: 10 }}><strong style={{ color: 'var(--white)' }}>2.3 Subscription Plans (Available from November 1, 2026)</strong><br/>
          The following subscription plans will be introduced:</p>
          <ul style={{ paddingLeft: 18, marginTop: 6 }}>
            <li><strong style={{ color: 'var(--green)' }}>Monthly Plan — ₦3,000/month:</strong> Full access to all features for one calendar month</li>
            <li><strong style={{ color: 'var(--bb)' }}>Semester Plan — ₦7,000/semester:</strong> Full access for one academic semester (approximately 5 months)</li>
            <li><strong style={{ color: 'var(--gold)' }}>Annual Plan — ₦15,000/year:</strong> Full access for one full academic session (12 months)</li>
          </ul>
          <p style={{ marginTop: 10 }}>Subscription plans are non-refundable once activated. CramWiz reserves the right to adjust pricing with 30 days notice.</p>
        </>)}

        {sec('3. Access Codes', <>
          <p>Each payment generates a unique, single-use access code (format: CW-XXXXXXXX). Access codes are personal and tied to the email address used during registration. You may not share, resell, or transfer your access code to any other person.</p>
          <p style={{ marginTop: 8 }}>Misuse of access codes — including sharing, selling, or attempting to use another person's code — will result in immediate permanent account suspension without refund.</p>
        </>)}

        {sec('4. Acceptable Use Policy', <>
          <p>You agree to use CramWiz only for lawful academic purposes. You must not:</p>
          <ul style={{ paddingLeft: 18, marginTop: 6 }}>
            <li>Use CramWiz to engage in academic fraud or submit AI-generated work as entirely your own without proper disclosure where required by your institution</li>
            <li>Attempt to reverse-engineer, scrape, or extract data from CramWiz</li>
            <li>Use automated tools, bots, or scripts to access CramWiz</li>
            <li>Share your account credentials with any other person</li>
            <li>Upload content that is illegal, harmful, or infringes on third-party rights</li>
            <li>Attempt to circumvent any access restrictions or security measures</li>
          </ul>
          <p style={{ marginTop: 8 }}>Violation of any of these rules will result in immediate account suspension without notice and without refund.</p>
        </>)}

        {sec('5. Subscription Expiry & Account Suspension', <>
          <p>When a subscription plan expires, access to premium features will be automatically restricted. Users will be notified 30 days and 7 days before expiry.</p>
          <p style={{ marginTop: 8 }}>Accounts that are suspended for rule violations are permanently banned. Suspended users forfeit any remaining subscription period and are not eligible for a refund.</p>
          <p style={{ marginTop: 8 }}>CramWiz reserves the right to suspend any account at any time for breach of these Terms, without prior notice, at its sole discretion.</p>
        </>)}

        {sec('6. Ambassador Program', <>
          <p>The CramWiz Ambassador Program allows registered users to earn a commission of ₦1,000 for each student who successfully subscribes using their unique referral code. Commissions are paid manually by the CramWiz team to the bank account provided at enrollment.</p>
          <p style={{ marginTop: 8 }}>CramWiz reserves the right to modify the commission rate, suspend, or terminate the Ambassador Program at any time. Fraudulent referrals (e.g., self-referrals or fake accounts) will result in disqualification and account suspension.</p>
        </>)}

        {sec('7. Intellectual Property', <>
          <p>All content, design, AI outputs, features, and branding on CramWiz are the intellectual property of CramWiz and its operators. You may not reproduce, distribute, or commercialize any part of CramWiz without express written permission.</p>
          <p style={{ marginTop: 8 }}>Study materials you upload remain your property. By uploading, you grant CramWiz a limited licence to process your materials solely for the purpose of generating your requested outputs.</p>
        </>)}

        {sec('8. AI-Generated Content Disclaimer', <>
          <p>CramWiz uses artificial intelligence to generate study materials, answers, and predictions. While we strive for accuracy, AI-generated content may occasionally contain errors. CramWiz is a study aid — it does not guarantee examination success and should not be used as the sole source of academic preparation.</p>
          <p style={{ marginTop: 8 }}>CramWiz is not liable for any academic penalties, failed examinations, or other consequences arising from reliance on AI-generated content.</p>
        </>)}

        {sec('9. Data & Privacy', <>
          <p>CramWiz collects your name, email address, WhatsApp number, department, university, and payment receipt for the purpose of account management and service delivery. We do not sell your personal data to third parties.</p>
          <p style={{ marginTop: 8 }}>Payment receipts are stored securely and used only for verifying your subscription payment. Study materials you upload are processed in real time and are not stored permanently on our servers.</p>
        </>)}

        {sec('10. Service Availability', <>
          <p>CramWiz is provided "as is." We do not guarantee 100% uptime. The platform may experience downtime due to maintenance, AI provider outages, or technical issues beyond our control. Planned maintenance will be communicated in advance where possible.</p>
          <p style={{ marginTop: 8 }}>CramWiz is not liable for any loss arising from platform unavailability, including during examination periods.</p>
        </>)}

        {sec('11. Changes to These Terms', <>
          <p>CramWiz reserves the right to update these Terms & Conditions at any time. Updated terms will be posted on this page with a new "Last Updated" date. Continued use of CramWiz after changes are posted constitutes your acceptance of the updated terms.</p>
          <p style={{ marginTop: 8 }}>For significant changes — particularly those affecting pricing or access — users will be notified by email at least 30 days in advance.</p>
        </>)}

        {sec('12. Contact', <>
          <p>For questions about these Terms, subscription issues, or account support, contact us at:</p>
          <p style={{ marginTop: 8 }}><strong style={{ color: 'var(--white)' }}>Email:</strong> <a href="mailto:cramwizai@gmail.com">cramwizai@gmail.com</a><br/>
          <strong style={{ color: 'var(--white)' }}>Platform:</strong> cramwiz.vercel.app<br/>
          <strong style={{ color: 'var(--white)' }}>Location:</strong> Port Harcourt, Rivers State, Nigeria</p>
        </>)}

        <div style={{ ...S.card, marginTop: 32, textAlign: 'center' }}>
          <p style={{ fontSize: '.82rem', color: 'var(--wd)' }}>By creating an account and using CramWiz, you confirm that you have read, understood, and agreed to these Terms & Conditions.</p>
          <Btn onClick={() => onNavigate('subscribe')} style={{ marginTop: 16 }}>Get Access — ₦3,000 Lifetime</Btn>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SECTION: ABOUT
// ============================================================
function About({ onNavigate }) {
  return (
    <div style={S.page}>
      <nav style={S.nav}>
        <div style={S.logo} onClick={() => onNavigate('landing')}>
          <img src="/logo.png" alt="CramWiz" style={S.logoImg} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Btn variant="ghost" onClick={() => onNavigate('landing')}>← Back</Btn>
          <Btn onClick={() => onNavigate('subscribe')}>Get Access</Btn>
        </div>
      </nav>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '40px 24px', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <img src="/logo.png" alt="CramWiz" style={{ height: 70, width: 'auto' }} />
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: -.5, marginBottom: 24, textAlign: 'center' }}>About CramWiz</h1>
        {[
          { title: 'What is CramWiz?', body: "CramWiz is the AI study platform built specifically for Nigerian university students. Think of it as the ChatGPT that doesn't disappoint — one that actually understands your textbooks, past questions, and the reality of studying in Nigeria. It's not just a chatbot. It reads your PDFs, maps your past questions, predicts what's coming in your exam, solves your worksheets, and reads everything back to you so you can study on the go." },
          { title: 'Why we built it', body: "70% of Nigerian university students work alongside school. Internet is expensive. Time is short. Most people cram before exams — not out of laziness, but because life is demanding. CramWiz doesn't judge that. It makes that cramming smarter, faster, and more targeted. Upload your material, get what matters, pass your exams." },
          { title: 'One-time payment. Lifetime access.', body: 'No monthly subscriptions. No hidden fees. Pay ₦3,000 once and CramWiz is yours for life. Every update, every new feature — included. We believe education tools should be affordable and accessible.' },
        ].map((s, i) => (
          <div key={i} style={{ ...S.card, marginBottom: 16 }}>
            <h3 style={{ fontWeight: 700, marginBottom: 10, color: 'var(--bb)' }}>{s.title}</h3>
            <p style={{ color: 'var(--wd)', lineHeight: 1.8, fontSize: '.9rem' }}>{s.body}</p>
          </div>
        ))}
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Btn size="lg" onClick={() => onNavigate('subscribe')}>Get Started — ₦3,000 Lifetime</Btn>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SECTION: SUBSCRIBE / PAYMENT
// ============================================================
function Subscribe({ onNavigate }) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dept, setDept] = useState('');
  const [uni, setUni] = useState('');
  const [refCode, setRefCode] = useState('');
  const [receiptFile, setReceiptFile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setError('');
    if (!fname || !email || !receiptFile) { setError('Please fill in first name, email, and upload your receipt.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Please enter a valid email address.'); return; }
    setLoading(true);
    try {
      const b64 = await new Promise((res, rej) => {
        const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsDataURL(receiptFile);
      });
      const subs = await SDB.get('subs') || [];
      // Resolve ambassador details from ref code
      const ambs = await SDB.get('ambassadors') || {};
      const ambEntry = refCode ? Object.values(ambs).find(a => a.code === refCode.trim().toUpperCase()) : null;
      const subId = 'PAY-' + Date.now();
      // Store receipt image SEPARATELY so subs array stays small (avoids Redis 1MB limit)
      await SDB.setReceipt(subId, b64);
      const newSub = { id: subId, name: fname + ' ' + lname, email, phone, dept, uni, ref: refCode, ambName: ambEntry?.name || '', ambBank: ambEntry ? `${ambEntry.bankAcctName} · ${ambEntry.bankAcct} · ${ambEntry.bankName}` : '', fileName: receiptFile.name, submittedAt: new Date().toISOString(), status: 'pending' };
      subs.push(newSub);
      await SDB.set('subs', subs);
      const fd = new FormData();
      fd.append('name', fname + ' ' + lname); fd.append('email', email); fd.append('phone', phone || 'not provided');
      fd.append('dept', dept || 'not provided'); fd.append('uni', uni || 'not provided');
      fd.append('referral_code', refCode || 'none');
      fd.append('ambassador_name', ambEntry?.name || 'none');
      fd.append('ambassador_bank', ambEntry ? `${ambEntry.bankAcctName} · ${ambEntry.bankAcct} · ${ambEntry.bankName}` : 'none');
      fd.append('_subject', 'New CramWiz Payment — ' + fname + ' ' + lname);
      fd.append('message', `Payment from ${fname} ${lname} (${email}). Phone: ${phone||'none'}. Dept: ${dept||'none'}, ${uni}. Ref: ${refCode||'none'}. Log into admin to confirm.`);
      fd.append('receipt', receiptFile);
      fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || 'mlgorbdr'}`, { method: 'POST', body: fd, headers: { Accept: 'application/json' } }).catch(() => {});
      onNavigate('submitted');
    } catch { setError('Submission failed. Please try again.'); }
    setLoading(false);
  };

  return (
    <div style={S.page}>
      <nav style={S.nav}>
        <div style={S.logo} onClick={() => onNavigate('landing')}><img src="/logo.png" alt="CramWiz" style={S.logoImg} /></div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Btn variant="ghost" onClick={() => onNavigate('landing')}>← Back</Btn>
          <Btn variant="ghost" onClick={() => onNavigate('login')}>Log In</Btn>
        </div>
      </nav>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '32px 20px', minHeight: 'calc(100vh - 57px)', position: 'relative', zIndex: 2 }}>
        <div style={{ width: '100%', maxWidth: 520 }}>
          <Badge color="blue" style={{ marginBottom: 12 }}>One-Time Payment · Lifetime Access</Badge>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: -.5, marginBottom: 6, marginTop: 12 }}>Get Full Access</h2>
          <p style={{ color: 'var(--wd)', fontSize: '.85rem', marginBottom: 24 }}>Pay once. Use forever. Your code is personal — tied to your email only.</p>

          {/* Bank details */}
          <div style={{ ...S.cardBlue, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.82rem', color: '#fff' }}>1</div>
              <div style={{ fontWeight: 700 }}>Make the transfer</div>
            </div>
            <div style={{ background: 'var(--black)', border: '1px solid var(--bd)', borderRadius: 'var(--r)', padding: '16px 20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '7px 16px', alignItems: 'center' }}>
                {[['Amount', '₦3,000', true], ['Bank', 'Moniepoint', false], ['Account', '8155272851', true], ['Name', 'Ibinabo Martins', false]].map(([k, v, bold]) => (
                  <>
                    <span key={k} style={{ fontSize: '.72rem', color: 'var(--wd)', fontFamily: 'var(--fm)', textTransform: 'uppercase' }}>{k}</span>
                    <span key={v} style={{ fontWeight: bold ? 800 : 600, fontSize: bold ? (k==='Amount'?'1.2rem':'.95rem') : '.9rem', color: bold ? 'var(--bb)' : 'var(--white)', letterSpacing: k==='Account' ? 2 : 0, fontFamily: k==='Account' ? 'var(--fm)' : 'var(--fn)' }}>{v}</span>
                  </>
                ))}
              </div>
            </div>
            <p style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 10 }}>Use your name as transfer narration so we can match your payment.</p>
          </div>

          {/* Form */}
          <div style={{ ...S.card, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--b4)', border: '1px solid var(--wf)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.82rem' }}>2</div>
              <div style={{ fontWeight: 700 }}>Fill your details & submit receipt</div>
            </div>
            {error && <Alert type="error">{error}</Alert>}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 0 }}>
              <Input label="First Name" value={fname} onChange={setFname} placeholder="First name" />
              <Input label="Last Name" value={lname} onChange={setLname} placeholder="Last name" />
            </div>
            <Input label="Email Address" type="email" value={email} onChange={setEmail} placeholder="Your access code comes here" hint="Double-check this — your login code is sent here." />
            <Input label="WhatsApp Number" type="tel" value={phone} onChange={setPhone} placeholder="+234 xxx xxx xxxx" hint="Backup — we'll send your code here if email fails." />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <Input label="Department" value={dept} onChange={setDept} placeholder="e.g. Computer Science" />
              <Input label="University / School" value={uni} onChange={setUni} placeholder="e.g. UNILAG" />
            </div>
            <Input label="Referral Code (optional)" value={refCode} onChange={setRefCode} placeholder="Ambassador code if any" />
            <div style={{ marginBottom: 16 }}>
              <label style={S.label}>Upload Payment Receipt</label>
              <div style={{ ...S.uploadZone, borderColor: receiptFile ? 'var(--green)' : 'var(--wf)', background: receiptFile ? 'rgba(0,214,143,.04)' : 'var(--b2)' }}>
                <input type="file" accept="image/*,.pdf" style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }} onChange={e => setReceiptFile(e.target.files[0])} />
                <div style={{ fontWeight: 600, fontSize: '.9rem' }}>{receiptFile ? receiptFile.name : 'Screenshot or photo of receipt'}</div>
                <div style={{ fontSize: '.75rem', color: 'var(--wd)', fontFamily: 'var(--fm)' }}>JPG, PNG or PDF</div>
              </div>
            </div>
            <Btn onClick={submit} disabled={loading} full>{loading ? 'Submitting...' : 'Submit Receipt for Review'}</Btn>
            <p style={{ fontSize: '.72rem', color: 'var(--wd)', textAlign: 'center', marginTop: 8 }}>
              By submitting, you agree to CramWiz's{' '}
              <button type="button" onClick={() => onNavigate('terms')} style={{ background: 'none', border: 'none', color: 'var(--bb)', cursor: 'pointer', fontSize: '.72rem', textDecoration: 'underline', padding: 0 }}>Terms & Conditions</button>
              . Access valid until Oct 31, 2026. No refunds once code is issued.
            </p>
            <p style={{ fontSize: '.72rem', color: 'var(--wd)', textAlign: 'center', marginTop: 4 }}>We verify and send your code — usually within a few hours.</p>
          </div>

          <div style={{ ...S.card, opacity: .6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--b4)', border: '1px solid var(--wf)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.82rem' }}>3</div>
              <div><div style={{ fontWeight: 700, marginBottom: 4 }}>Get your code by email & WhatsApp</div><div style={{ fontSize: '.72rem', color: 'var(--wd)' }}>Use it to register. Works once, only with your email.</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SECTION: SUBMITTED
// ============================================================
function Submitted({ onNavigate }) {
  return (
    <div style={{ ...S.page, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 20 }}>
      <div style={{ width: '100%', maxWidth: 400, textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(26,108,255,.15)', border: '2px solid var(--bb)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
          <svg style={{ width: 24, height: 24, color: 'var(--bb)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h2 style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: 10 }}>Receipt Submitted!</h2>
        <p style={{ color: 'var(--wd)', fontSize: '.875rem', lineHeight: 1.7, marginBottom: 20 }}>
          We've received your receipt. Once we confirm your transfer, your CramWiz access code will be sent to your email and WhatsApp.
        </p>
        <Alert type="info" style={{ textAlign: 'left' }}>
          <ul style={{ paddingLeft: 14, marginTop: 4 }}>
            <li style={{ marginBottom: 6 }}>We verify your Moniepoint transfer</li>
            <li style={{ marginBottom: 6 }}>Code is sent to your email AND WhatsApp</li>
            <li>Come back and register with your code</li>
          </ul>
        </Alert>
        <Btn variant="outline" full onClick={() => onNavigate('landing')} style={{ marginBottom: 8 }}>Back to Home</Btn>
        <Btn variant="ghost" full onClick={() => onNavigate('login')}>I Already Have My Code</Btn>
      </div>
    </div>
  );
}

// ============================================================
// SECTION: LOGIN
// ============================================================
function Login({ onNavigate, onLogin }) {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const doLogin = async () => {
    setError('');
    if (!email || !pw) { setError('Fill in all fields.'); return; }
    setLoading(true);
    const users = await SDB.get('users') || {};
    const u = users[email.toLowerCase()];
    if (!u || u.pw !== hash(pw)) { setError('Invalid email or password.'); setLoading(false); return; }
    if (u.disabled) { setError('This account has been deactivated. Contact support.'); setLoading(false); return; }
    const user = { email: email.toLowerCase(), name: u.name, isFy: u.isFy, isAdmin: u.isAdmin, dept: u.dept || '', uni: u.uni || '' };
    DB.set('user', user);
    onLogin(user);
    setLoading(false);
  };

  return (
    <div style={{ ...S.page, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 20 }}>
      <div style={{ width: '100%', maxWidth: 400, position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: 6 }}><img src="/logo.png" alt="CramWiz" style={{ height: 36 }} /></div>
        <p style={{ fontSize: '.8rem', color: 'var(--wd)', marginBottom: 28, fontFamily: 'var(--fm)' }}>// welcome back. let's get to work.</p>
        {error && <Alert type="error">{error}</Alert>}
        <Input label="Email Address" type="email" value={email} onChange={setEmail} placeholder="your@email.com" />
        <Input label="Password" type="password" value={pw} onChange={setPw} placeholder="••••••••" />
        <Btn full onClick={doLogin} disabled={loading} style={{ marginTop: 8 }}>{loading ? 'Logging in…' : 'Log In'}</Btn>
        <div style={{ textAlign: 'center', marginTop: 10 }}>
          <button onClick={() => onNavigate('forgot')} style={{ background: 'none', border: 'none', color: 'var(--bb)', cursor: 'pointer', fontSize: '.82rem', fontFamily: 'var(--fn)' }}>Forgot password?</button>
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid var(--wf)', margin: '18px 0' }} />
        <p style={{ textAlign: 'center', fontSize: '.875rem', color: 'var(--wd)' }}>
          No account?{' '}
          <button onClick={() => onNavigate('register')} style={{ background: 'none', border: 'none', color: 'var(--bb)', cursor: 'pointer', fontSize: '.875rem', fontFamily: 'var(--fn)' }}>Register with your code</button>
        </p>
        <div style={{ textAlign: 'center', marginTop: 10 }}>
          <Btn variant="ghost" onClick={() => onNavigate('landing')}>← Back</Btn>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SECTION: FORGOT PASSWORD
// ============================================================
function Forgot({ onNavigate }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [verifiedEmail, setVerifiedEmail] = useState('');

  const verify = async () => {
    setError('');
    if (!email || !code) { setError('Fill in email and access code.'); return; }
    const users = await SDB.get('users') || {};
    const codes = await SDB.get('codes') || {};
    if (!users[email.toLowerCase()]) { setError('No account found with this email.'); return; }
    const match = Object.entries(codes).find(([c, v]) => v.usedBy === email.toLowerCase() && c === code.toUpperCase());
    if (!match) { setError('Access code does not match this account.'); return; }
    setVerifiedEmail(email.toLowerCase());
    setStep(2);
  };

  const reset = async () => {
    setError('');
    if (newPw.length < 6) { setError('Password must be at least 6 characters.'); return; }
    if (newPw !== confirmPw) { setError('Passwords do not match.'); return; }
    const users = await SDB.get('users') || {};
    if (!users[verifiedEmail]) { setError('Session error. Start over.'); return; }
    users[verifiedEmail].pw = hash(newPw);
    await SDB.set('users', users);
    setSuccess('Password reset! Redirecting to login...');
    setTimeout(() => onNavigate('login'), 2000);
  };

  return (
    <div style={{ ...S.page, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 20 }}>
      <div style={{ width: '100%', maxWidth: 400, position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: 6 }}><img src="/logo.png" alt="CramWiz" style={{ height: 36 }} /></div>
        <p style={{ fontSize: '.8rem', color: 'var(--wd)', marginBottom: 28, fontFamily: 'var(--fm)' }}>// reset your password</p>
        {error && <Alert type="error">{error}</Alert>}
        {success && <Alert type="success">{success}</Alert>}
        {step === 1 ? (
          <>
            <p style={{ color: 'var(--wd)', fontSize: '.875rem', marginBottom: 16 }}>Enter your email and the access code you used to register.</p>
            <Input label="Email Address" type="email" value={email} onChange={setEmail} placeholder="your@email.com" />
            <Input label="Your Access Code" value={code} onChange={setCode} placeholder="CW-XXXXXXXX" />
            <Btn full onClick={verify} style={{ marginTop: 8 }}>Verify Identity</Btn>
          </>
        ) : (
          <>
            <p style={{ color: 'var(--wd)', fontSize: '.875rem', marginBottom: 16 }}>Enter your new password.</p>
            <Input label="New Password" type="password" value={newPw} onChange={setNewPw} placeholder="Minimum 6 characters" />
            <Input label="Confirm Password" type="password" value={confirmPw} onChange={setConfirmPw} placeholder="Confirm new password" />
            <Btn full onClick={reset} style={{ marginTop: 8 }}>Reset Password</Btn>
          </>
        )}
        <div style={{ textAlign: 'center', marginTop: 12 }}>
          <Btn variant="ghost" onClick={() => onNavigate('login')}>← Back to Login</Btn>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SECTION: REGISTER
// ============================================================
function Register({ onNavigate, onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [dept, setDept] = useState('');
  const [uni, setUni] = useState('');
  const [code, setCode] = useState('');
  const [isFy, setIsFy] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const doRegister = async () => {
    setError('');
    if (!name || !email || !pw || !code) { setError('Fill in all required fields.'); return; }
    if (pw.length < 6) { setError('Password must be at least 6 characters.'); return; }
    if (!agreedTerms) { setError('Please read and accept the Terms & Conditions to continue.'); return; }
    setLoading(true);
    const codes = await SDB.get('codes') || {};
    const uc = code.trim().toUpperCase();
    if (!codes[uc]) { setError('Invalid access code.'); setLoading(false); return; }
    if (codes[uc].used) { setError('This code has already been used.'); setLoading(false); return; }
    if (codes[uc].reservedFor && codes[uc].reservedFor !== email.toLowerCase()) { setError('This code was assigned to a different email address.'); setLoading(false); return; }
    const users = await SDB.get('users') || {};
    const el = email.toLowerCase();
    if (users[el]) { setError('An account with this email already exists.'); setLoading(false); return; }
    users[el] = { name, pw: hash(pw), isFy, isAdmin: false, dept, uni };
    await SDB.set('users', users);
    codes[uc].used = true; codes[uc].usedBy = el; codes[uc].usedAt = new Date().toISOString();
    await SDB.set('codes', codes);
    // Handle referral
    const ref = sessionStorage.getItem('cwref');
    if (ref) {
      const ambs = await SDB.get('ambassadors') || {};
      const ambKey = Object.keys(ambs).find(k => ambs[k].code === ref);
      if (ambKey) {
        ambs[ambKey].referrals = (ambs[ambKey].referrals || 0) + 1;
        ambs[ambKey].earned = (ambs[ambKey].earned || 0) + 1000;
        if (!ambs[ambKey].signups) ambs[ambKey].signups = [];
        ambs[ambKey].signups.push({ email: el, name, date: new Date().toISOString() });
        await SDB.set('ambassadors', ambs);
      }
      sessionStorage.removeItem('cwref');
    }
    const user = { email: el, name, isFy, isAdmin: false, dept, uni };
    DB.set('user', user);
    setLoading(false);
    onLogin(user);
  };

  return (
    <div style={{ ...S.page, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 20 }}>
      <div style={{ width: '100%', maxWidth: 440, position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: 6 }}><img src="/logo.png" alt="CramWiz" style={{ height: 36 }} /></div>
        <p style={{ fontSize: '.8rem', color: 'var(--wd)', marginBottom: 28, fontFamily: 'var(--fm)' }}>// one code. one account. let's go.</p>
        {error && <Alert type="error">{error}</Alert>}
        <Input label="Your Name" value={name} onChange={setName} placeholder="What should we call you?" />
        <Input label="Email Address" type="email" value={email} onChange={setEmail} placeholder="your@email.com" />
        <Input label="Create Password" type="password" value={pw} onChange={setPw} placeholder="Minimum 6 characters" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <Input label="Department" value={dept} onChange={setDept} placeholder="e.g. Biochemistry" />
          <Input label="University" value={uni} onChange={setUni} placeholder="e.g. UNILAG" />
        </div>
        <Input label="Access Code" value={code} onChange={setCode} placeholder="CW-XXXXXXXX" hint="Works once, only with the email it was assigned to." style={{ fontFamily: 'var(--fm)', letterSpacing: 1 }} />
        <label style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, cursor: 'pointer' }}>
          <input type="checkbox" checked={isFy} onChange={e => setIsFy(e.target.checked)} style={{ accentColor: 'var(--bb)' }} />
          <span style={{ fontSize: '.83rem', color: 'var(--wd)' }}>I am a final year student</span>
        </label>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 18, cursor: 'pointer', padding: '10px 12px', background: agreedTerms ? 'rgba(26,108,255,.08)' : 'rgba(255,255,255,.03)', border: `1px solid ${agreedTerms ? 'rgba(26,108,255,.3)' : 'var(--wf)'}`, borderRadius: 'var(--rs)' }}>
          <input type="checkbox" checked={agreedTerms} onChange={e => setAgreedTerms(e.target.checked)} style={{ accentColor: 'var(--bb)', marginTop: 2, flexShrink: 0 }} />
          <span style={{ fontSize: '.82rem', color: 'var(--wd)', lineHeight: 1.6 }}>
            I have read and agree to CramWiz's{' '}
            <button type="button" onClick={() => onNavigate('terms')} style={{ background: 'none', border: 'none', color: 'var(--bb)', cursor: 'pointer', fontSize: '.82rem', textDecoration: 'underline', padding: 0 }}>
              Terms & Conditions
            </button>
            , including the access policy, refund policy, and the November 1, 2026 subscription transition.
          </span>
        </label>
        <Btn full onClick={doRegister} disabled={loading || !agreedTerms} style={{ marginTop: 8, opacity: agreedTerms ? 1 : 0.6 }}>{loading ? 'Creating account…' : 'Create My Account'}</Btn>
        <hr style={{ border: 'none', borderTop: '1px solid var(--wf)', margin: '18px 0' }} />
        <p style={{ textAlign: 'center', fontSize: '.875rem', color: 'var(--wd)' }}>
          Already have an account?{' '}
          <button onClick={() => onNavigate('login')} style={{ background: 'none', border: 'none', color: 'var(--bb)', cursor: 'pointer', fontSize: '.875rem' }}>Log in</button>
        </p>
        <div style={{ textAlign: 'center', marginTop: 10 }}><Btn variant="ghost" onClick={() => onNavigate('landing')}>← Back</Btn></div>
      </div>
    </div>
  );
}

// ============================================================
// DASHBOARD
// ============================================================
function Dashboard({ user, onLogout, onNavigate }) {
  const [section, setSection] = useState('upload');
  const [showMore, setShowMore] = useState(false);
  const [files, setFiles] = useState({});
  const [results, setResults] = useState(() => DB.get('results'));
  const [solved, setSolved] = useState(() => DB.get('solved'));
  const [mapping, setMapping] = useState(() => DB.get('mapping'));
  const [processing, setProcessing] = useState(false);
  const [loaderText, setLoaderText] = useState('');

  const setFile = (file, type) => {
    const allowed = ['application/pdf','image/jpeg','image/png','image/jpg','image/webp'];
    if (!allowed.includes(file.type) && !file.type.startsWith('image/')) { alert('Please upload a PDF or image file.'); return; }
    if (file.size > 62914560) { alert('File too large. Max 60MB.'); return; }
    setFiles(prev => ({ ...prev, [type]: file }));
  };

  const animLoader = (msgs) => {
    let i = 0;
    setLoaderText(msgs[0]);
    const iv = setInterval(() => { i++; if (i < msgs.length) setLoaderText(msgs[i]); else clearInterval(iv); }, 2600);
    return () => clearInterval(iv);
  };

  const showSec = (s) => { setSection(s); setShowMore(false); window.scrollTo(0,0); };

  const sidebarBtns = [
    { id: 'upload', label: 'Upload & Process', icon: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12' },
    { id: 'assignment', label: 'Assignment Solver', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
    { id: 'results', label: 'My Results', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { id: 'solve', label: 'Solve Past Questions', icon: 'M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'mapping', label: 'Pattern Mapping', icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
    { id: 'qbank', label: 'Question Bank', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.75 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { id: 'manual', label: 'Solve Manuals', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { id: 'notepad', label: 'Notepad', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
    { id: 'community', label: 'Community', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
    { id: 'ambassador', label: 'Ambassador', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
    ...(user.isFy ? [{ id: 'project', label: 'Project Topics', icon: 'M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' }] : []),
    { id: 'account', label: 'My Account', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'feedback', label: 'Feedback', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
    ...(user.isAdmin ? [{ id: 'admin', label: 'Admin Panel', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }] : []),
  ];

  return (
    <div style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <nav style={S.nav}>
        <div style={S.logo} onClick={() => onNavigate('landing')}><img src="/logo.png" alt="CramWiz" style={S.logoImg} /></div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--fm)', fontSize: '.72rem', color: 'var(--wd)', maxWidth: 120, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.name}</span>
          <Btn variant="outline" onClick={onLogout}>Log Out</Btn>
        </div>
      </nav>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: 'calc(100vh - 57px)' }} className="dashboard-grid">
        {/* Sidebar */}
        <aside style={{ background: 'var(--b2)', borderRight: '1px solid var(--wf)', padding: '20px 0', overflowY: 'auto' }} className="sidebar">
          {sidebarBtns.map(b => (
            <button key={b.id} onClick={() => showSec(b.id)} style={{
              display: 'flex', alignItems: 'center', gap: 8, width: '100%',
              padding: '9px 14px', border: 'none', background: section === b.id ? 'rgba(26,108,255,.15)' : 'transparent',
              color: section === b.id ? 'var(--bb)' : 'var(--wd)', fontFamily: 'var(--fn)', fontSize: '.83rem',
              fontWeight: section === b.id ? 600 : 500, cursor: 'pointer', textAlign: 'left', transition: 'var(--tr)',
            }}>
              <svg style={{ width: 16, height: 16, flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d={b.icon} /></svg>
              {b.label}
            </button>
          ))}
        </aside>

        {/* Main content */}
        <main style={{ padding: '28px 32px', overflowY: 'auto', paddingBottom: 90 }} className="main-content">
          {section === 'upload' && <SectionUpload files={files} setFile={setFile} onResults={(r) => { setResults(r); DB.set('results', r); setSection('results'); }} animLoader={animLoader} setProcessing={setProcessing} processing={processing} loaderText={loaderText} setLoaderText={setLoaderText} />}
          {section === 'assignment' && <SectionAssignment user={user} />}
          {section === 'results' && <SectionResults results={results} isFy={user.isFy} onUpload={() => setSection('upload')} />}
          {section === 'solve' && <SectionSolve files={files} setFile={setFile} solved={solved} setSolved={(s) => { setSolved(s); DB.set('solved', s); }} />}
          {section === 'mapping' && <SectionMapping files={files} setFile={setFile} mapping={mapping} setMapping={(m) => { setMapping(m); DB.set('mapping', m); }} />}
          {section === 'qbank' && <SectionQbank />}
          {section === 'manual' && <SectionManual files={files} setFile={setFile} />}
          {section === 'notepad' && <SectionNotepad />}
          {section === 'community' && <SectionCommunity user={user} />}
          {section === 'ambassador' && <SectionAmbassador user={user} />}
          {section === 'project' && <SectionProject />}
          {section === 'account' && <SectionAccount user={user} />}
          {section === 'feedback' && <SectionFeedback user={user} />}
          {section === 'admin' && user.isAdmin && <SectionAdmin />}
        </main>
      </div>

      {/* Mobile bottom nav */}
      <div className="mobile-nav" style={{ display: 'none', position: 'fixed', bottom: 0, left: 0, right: 0, background: 'rgba(8,8,15,.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid var(--wf)', zIndex: 200, padding: '6px 0 max(6px, env(safe-area-inset-bottom))' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {[
            { id: 'upload', label: 'Upload', icon: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12' },
            { id: 'results', label: 'Results', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
            { id: 'solve', label: 'Solve', icon: 'M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            { id: 'community', label: 'Community', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
          ].map(b => (
            <button key={b.id} onClick={() => showSec(b.id)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: '6px 8px', border: 'none', background: 'transparent', color: section === b.id ? 'var(--bb)' : 'var(--wd)', cursor: 'pointer', flex: 1 }}>
              <svg style={{ width: 20, height: 20 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d={b.icon} /></svg>
              <span style={{ fontSize: '.6rem', fontWeight: 600 }}>{b.label}</span>
            </button>
          ))}
          <button onClick={() => setShowMore(v => !v)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: '6px 8px', border: 'none', background: 'transparent', color: 'var(--wd)', cursor: 'pointer', flex: 1 }}>
            <svg style={{ width: 20, height: 20 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" /></svg>
            <span style={{ fontSize: '.6rem', fontWeight: 600 }}>More</span>
          </button>
        </div>
      </div>

      {/* More menu */}
      {showMore && (
        <div style={{ position: 'fixed', bottom: 65, left: 0, right: 0, background: 'rgba(15,15,28,.98)', backdropFilter: 'blur(20px)', borderTop: '1px solid var(--wf)', zIndex: 199, padding: '12px 16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 10 }}>
            {['mapping','qbank','manual','notepad','ambassador','account'].map(id => {
              const b = sidebarBtns.find(x => x.id === id);
              if (!b) return null;
              return (
                <button key={id} onClick={() => showSec(id)} style={{ background: 'var(--b3)', border: '1px solid var(--wf)', borderRadius: 'var(--r)', padding: '12px 8px', color: 'var(--wd)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, fontSize: '.72rem', fontFamily: 'var(--fn)', fontWeight: 600 }}>
                  <svg style={{ width: 20, height: 20 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d={b.icon} /></svg>
                  {b.label}
                </button>
              );
            })}
          </div>
          <button onClick={() => setShowMore(false)} style={{ width: '100%', background: 'transparent', border: '1px solid var(--wf)', borderRadius: 'var(--rs)', padding: 10, color: 'var(--wd)', cursor: 'pointer', fontFamily: 'var(--fn)', fontSize: '.82rem' }}>Close</button>
        </div>
      )}
    </div>
  );
}

// ============================================================
// DASHBOARD SECTIONS
// ============================================================

// ---- Markdown renderer (bold, numbered lists, headings) ----
function MarkdownText({ text }) {
  if (!text) return null;
  const lines = text.split('\n');
  return (
    <div style={{ lineHeight: 1.8, fontSize: '.9rem', color: 'var(--wd)' }}>
      {lines.map((line, i) => {
        if (!line.trim()) return <div key={i} style={{ height: 10 }} />;
        // Heading ##
        if (line.startsWith('## ')) return <div key={i} style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--white)', margin: '14px 0 6px' }}>{line.slice(3)}</div>;
        if (line.startsWith('# ')) return <div key={i} style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--white)', margin: '16px 0 8px' }}>{line.slice(2)}</div>;
        // Numbered list
        const numMatch = line.match(/^(\d+)\.\s+(.+)/);
        if (numMatch) return (
          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 6 }}>
            <span style={{ fontWeight: 700, color: 'var(--bb)', minWidth: 22, flexShrink: 0 }}>{numMatch[1]}.</span>
            <span>{renderInline(numMatch[2])}</span>
          </div>
        );
        // Bullet
        if (line.startsWith('- ') || line.startsWith('• ')) return (
          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 5 }}>
            <span style={{ color: 'var(--bb)', flexShrink: 0 }}>•</span>
            <span>{renderInline(line.slice(2))}</span>
          </div>
        );
        return <p key={i} style={{ margin: '0 0 6px' }}>{renderInline(line)}</p>;
      })}
    </div>
  );
}

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**')
      ? <strong key={i} style={{ color: 'var(--white)', fontWeight: 700 }}>{p.slice(2, -2)}</strong>
      : p
  );
}

function SectionAssignment({ user }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [file, setFile] = useState(null);
  const [customInstructions, setCustomInstructions] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const bottomRef = useRef(null);

  // Scroll to bottom on new messages
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, loading]);

  const send = async () => {
    const q = input.trim();
    if (!q && !file) return;
    setError(''); setLoading(true);

    const userMsg = { role: 'user', text: q || `[File uploaded: ${file?.name}]`, file: file?.name };
    setMessages(prev => [...prev, userMsg]);
    setInput(''); setFile(null);

    try {
      let fileContext = '';
      if (file) {
        fileContext = await extractPdfText(file);
      }

      const history = messages.slice(-6).map(m =>
        m.role === 'user' ? `Student: ${m.text}` : `CramWiz: ${m.text}`
      ).join('\n');

      const sysPrompt = `You are CramWiz Assignment Solver — a highly accurate academic assistant for Nigerian university students.

RULES:
- Answer DIRECTLY. Never say "I'll solve this" or "Here's how to approach". Just solve it.
- For calculations: show every numbered step, state each formula, substitute values, give final answer in bold.
- For essay/theory: write the actual answer — structured, accurate, complete. Not a guide.
- For code: write the actual working code with comments.
- For diagrams/drawing questions: represent with clear ASCII or structured text, label all parts.
- Use **bold** for key terms, answers, and important steps.
- Be accurate. Double-check every calculation. This is for university assessment.
- Write clearly and confidently like a first-class student.
${customInstructions ? '\nAdditional instructions from student: ' + customInstructions : ''}`;

      const fullPrompt = `${sysPrompt}

${history ? 'Previous conversation:\n' + history + '\n' : ''}${fileContext ? 'Assignment document content:\n' + fileContext + '\n\n' : ''}Student question/assignment:
${q || 'Solve the assignment in the uploaded document.'}`;

      const answer = await aiCallText(fullPrompt, 6000);
      setMessages(prev => [...prev, { role: 'ai', text: answer }]);
    } catch(e) {
      setError('Error: ' + e.message);
    }
    setLoading(false);
  };

  const exportPDF = () => {
    const win = window.open('', '_blank');
    const content = messages.map(m => {
      if (m.role === 'user') return `<div style="margin:16px 0 6px;font-weight:700;color:#1a6cff">You: ${m.text}</div>`;
      return `<div style="margin:6px 0 20px;white-space:pre-wrap;line-height:1.8">${m.text.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')}</div><hr style="border:none;border-top:1px solid #eee"/>`;
    }).join('');
    win.document.write(`<!DOCTYPE html><html><head><title>CramWiz Assignment — ${user.name}</title>
<style>body{font-family:Georgia,serif;max-width:780px;margin:40px auto;padding:0 24px;color:#111;font-size:15px;line-height:1.8}h1{color:#1a6cff;font-size:1.4rem;margin-bottom:4px}p.meta{color:#666;font-size:.85rem;margin-bottom:32px}strong{color:#000}hr{margin:20px 0}@media print{body{margin:20px}}</style>
</head><body>
<h1>CramWiz Assignment Solutions</h1>
<p class="meta">Student: ${user.name} &nbsp;|&nbsp; ${new Date().toLocaleDateString('en-NG', {weekday:'long',year:'numeric',month:'long',day:'numeric'})}</p>
${content}
</body></html>`);
    win.document.close();
    setTimeout(() => win.print(), 500);
  };

  const handleKey = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)', minHeight: 500 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, flexShrink: 0 }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 2 }}>Assignment Solver</h2>
          <p style={{ fontSize: '.82rem', color: 'var(--wd)' }}>Type your assignment questions or upload a PDF. Get direct, complete answers.</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Btn variant="outline" onClick={() => setShowInstructions(v => !v)}>
            {showInstructions ? 'Hide Options' : '⚙ Options'}
          </Btn>
          {messages.length > 0 && <Btn variant="outline" onClick={exportPDF}>Export PDF</Btn>}
          {messages.length > 0 && <Btn variant="ghost" onClick={() => setMessages([])}>Clear</Btn>}
        </div>
      </div>

      {showInstructions && (
        <div style={{ ...S.card, marginBottom: 12, flexShrink: 0 }}>
          <label style={S.label}>Custom Instructions (optional)</label>
          <textarea value={customInstructions} onChange={e => setCustomInstructions(e.target.value)}
            placeholder="e.g. Use APA referencing. Answer in 500 words. Focus on Nigerian context. Show all derivations."
            style={{ ...S.input, minHeight: 60, resize: 'vertical', fontSize: '.85rem' }} />
          <p style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 4 }}>These instructions apply to every answer in this session.</p>
        </div>
      )}

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 0', marginBottom: 12 }}>
        {messages.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px 20px', color: 'var(--wd)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>📝</div>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--white)', marginBottom: 8 }}>Ready to solve your assignment</div>
            <p style={{ fontSize: '.875rem', maxWidth: 400, margin: '0 auto', lineHeight: 1.7 }}>Type any assignment question below, or upload a PDF. CramWiz solves directly — no fluff, no preamble.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, maxWidth: 480, margin: '20px auto 0' }} className="grid-2">
              {['"Calculate the pH of 0.1M HCl"','"Write an essay on federalism in Nigeria"','"Solve the circuit for current I"','"Explain the OSI model with diagram"'].map((ex, i) => (
                <button key={i} onClick={() => setInput(ex.replace(/"/g,''))} style={{ background: 'var(--b3)', border: '1px solid var(--wf)', borderRadius: 'var(--rs)', padding: '10px 12px', color: 'var(--wd)', cursor: 'pointer', textAlign: 'left', fontSize: '.78rem', fontFamily: 'var(--fn)' }}>{ex}</button>
              ))}
            </div>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 20, display: 'flex', flexDirection: 'column', alignItems: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
            {m.role === 'user' ? (
              <div style={{ maxWidth: '72%', background: 'var(--bb)', color: '#fff', borderRadius: '16px 16px 4px 16px', padding: '10px 16px', fontSize: '.9rem', lineHeight: 1.6, fontWeight: 500 }}>{m.text}</div>
            ) : (
              <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,var(--blue),var(--bb))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.7rem', fontWeight: 800, flexShrink: 0 }}>CW</div>
                  <span style={{ fontSize: '.72rem', color: 'var(--wd)', fontFamily: 'var(--fm)' }}>CramWiz</span>
                </div>
                <div style={{ background: 'var(--b3)', border: '1px solid var(--wf)', borderRadius: '4px 16px 16px 16px', padding: '16px 20px' }}>
                  <MarkdownText text={m.text} />
                </div>
                <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
                  <VoiceBtn text={m.text.replace(/\*\*/g,'')} />
                  <button onClick={() => navigator.clipboard.writeText(m.text)} style={{ background: 'none', border: '1px solid var(--wf)', borderRadius: 100, padding: '4px 12px', fontSize: '.72rem', color: 'var(--wd)', cursor: 'pointer', fontFamily: 'var(--fm)' }}>Copy</button>
                </div>
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 0' }}>
            <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,var(--blue),var(--bb))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.7rem', fontWeight: 800, flexShrink: 0 }}>CW</div>
            <div style={{ display: 'flex', gap: 4 }}>
              {[0,1,2].map(d => <div key={d} style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--bb)', animation: 'bounce 1.2s infinite', animationDelay: d*0.2+'s' }} />)}
            </div>
          </div>
        )}
        {error && <Alert type="error">{error}</Alert>}
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div style={{ flexShrink: 0, background: 'var(--b2)', border: '1px solid var(--wf)', borderRadius: 'var(--r)', padding: 12 }}>
        {file && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, padding: '6px 10px', background: 'rgba(26,108,255,.1)', borderRadius: 'var(--rs)', fontSize: '.78rem' }}>
            <span style={{ color: 'var(--bb)' }}>📎 {file.name}</span>
            <button onClick={() => setFile(null)} style={{ background: 'none', border: 'none', color: 'var(--red)', cursor: 'pointer', fontSize: '.78rem' }}>✕</button>
          </div>
        )}
        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
          <label style={{ cursor: 'pointer', padding: '8px', color: 'var(--wd)', flexShrink: 0, display: 'flex', alignItems: 'center' }} title="Upload assignment PDF">
            <input type="file" accept=".pdf,image/*" style={{ display: 'none' }} onChange={e => { if (e.target.files[0]) setFile(e.target.files[0]); }} />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
          </label>
          <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey}
            placeholder="Type your assignment question here… or upload a PDF above. Press Enter to send, Shift+Enter for new line."
            style={{ ...S.input, flex: 1, minHeight: 44, maxHeight: 160, resize: 'none', margin: 0, padding: '10px 14px', fontSize: '.9rem', lineHeight: 1.5 }}
            rows={1}
          />
          <Btn onClick={send} disabled={loading || (!input.trim() && !file)} style={{ flexShrink: 0, height: 44 }}>
            {loading ? '…' : 'Send'}
          </Btn>
        </div>
        <p style={{ fontSize: '.68rem', color: 'var(--wd)', marginTop: 6, fontFamily: 'var(--fm)' }}>Enter to send · Shift+Enter for new line · Upload PDF or image of assignment</p>
      </div>
    </div>
  );
}

function SectionUpload({ files, setFile, onResults, animLoader, processing, setProcessing, loaderText, setLoaderText }) {
  const [course, setCourse] = useState('');
  const [mode, setMode] = useState('exam');
  const [error, setError] = useState('');

  const process = async () => {
    if (!files.material) return;
    setError(''); setProcessing(true);
    const stop = animLoader(['Reading your documents...','Analysing key topics...','Generating exam questions...','Looking for patterns...','Almost done...']);
    try {
      const mat = await extractPdfText(files.material);
      const pq = files.pastQuestions ? await extractPdfText(files.pastQuestions) : '';
      const hasPQ = pq.length > 20;
      const studySystemPrompt = mode === 'study' ? `You are CramWiz — an academic tutor designed to help students understand study materials deeply.
For every topic explanation and exam answer, follow this exact format:

1. SIMPLE EXPLANATION
   Explain the concept in clear and easy-to-understand language.

2. KEY POINTS
   List the most important ideas as bullet points.

3. DETAILED BREAKDOWN
   Break the concept down step-by-step. Do not just define terms — teach them.

4. EXAMPLES
   Provide practical or exam-style examples with full workings.

5. SUMMARY
   Give a short and clear recap perfect for revision.

RULES: Never give only definitions. Focus on understanding, not just description. Teach like a tutor preparing a student for exams.` : `You are CramWiz, a highly accurate AI exam prep tutor for Nigerian university students. Give sharp, direct, exam-ready answers with full step-by-step workings for calculations.`;

      const prompt = `${studySystemPrompt}${course ? '\nCourse: ' + course : ''}

IMPORTANT INSTRUCTIONS:
- Be HIGHLY ACCURATE. Every fact, formula, and answer must be correct.
- For calculations: show EVERY step clearly, number each step, and state the final answer boldly.
- For theory: explain in clear, bold language. Be direct like a lecturer who wants students to pass.
- If a topic involves a diagram (circuits, graphs, structures, flow charts, anatomy, etc.), describe it clearly with ASCII or structured text representation.
- Do NOT give identical answers to generic questions. Approach each topic from a unique angle.
- Write answers as though you are the student's private tutor sitting next to them.

MATERIAL: ${mat}
${hasPQ ? 'PAST QUESTIONS:\n' + pq : ''}

Respond ONLY with valid JSON (no markdown, no backticks):
{"topics":[{"name":"Topic","importance":85,"summary":"2-3 sentence explanation"}],"summary":"3-5 sentence overview","questions":[{"question":"question text","answer":"full model answer — for study mode follow the 5-part tutor format; for exam mode give direct sharp answers with workings","type":"theory|calculation|short"}],"hotTopics":${hasPQ ? '[{"topic":"name","frequency":80,"note":"appeared X/Y years"}]' : '[]'},"examTips":["actionable tip 1","actionable tip 2","actionable tip 3"],"projectTopics":["topic1","topic2","topic3"]}
Generate min: 5 topics, 10 questions, 3 tips.${hasPQ ? ' Use past questions to identify hot topics and make questions match the past question style.' : ''}`;
      const r = await aiCall(prompt, 4000);
      stop(); onResults(r);
    } catch(e) {
      stop();
      setError('Error: ' + e.message);
    }
    setProcessing(false);
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: -.3, marginBottom: 3 }}>Upload Materials</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 24 }}>Upload your study material. Adding past questions makes predictions far more accurate.</p>
      {error && <Alert type="error">{error}</Alert>}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="grid-2">
        <UploadZone label="Study Material" badge="Required" type="material" files={files} onFile={setFile} />
        <UploadZone label="Past Questions" badge="Optional" type="pastQuestions" files={files} onFile={setFile} />
      </div>
      <div style={{ ...S.card, marginTop: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="grid-2">
          <Input label="Course / Subject" value={course} onChange={setCourse} placeholder="e.g. Organic Chemistry" />
          <Select label="Study Mode" value={mode} onChange={setMode} options={[{ value: 'exam', label: 'Exam Mode — concise answers' },{ value: 'study', label: 'Study Mode — deep understanding' }]} />
        </div>
      </div>
      {processing ? <Loader text={loaderText} /> : (
        <div style={{ marginTop: 18 }}>
          <Btn onClick={process} disabled={!files.material}>Analyse My Material</Btn>
          <p style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 8 }}>Large PDFs may take up to 30 seconds.</p>
        </div>
      )}
    </div>
  );
}

function SectionResults({ results, isFy, onUpload }) {
  const [tab, setTab] = useState('summary');
  if (!results) return (
    <div style={{ textAlign: 'center', padding: '48px 20px' }}>
      <p style={{ color: 'var(--wd)', marginBottom: 16 }}>No results yet. Upload your material and click Analyse.</p>
      <Btn onClick={onUpload}>Upload Material</Btn>
    </div>
  );
  const tabs = [
    { id: 'summary', label: 'Summary' },
    { id: 'questions', label: 'Exam Questions' },
    { id: 'hot', label: 'Hot Topics' },
    { id: 'tips', label: 'Exam Tips' },
    ...(isFy ? [{ id: 'project', label: 'Project Topics' }] : []),
  ];
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: -.3 }}>My Results</h2>
        <Btn variant="outline" onClick={() => {
          let html = `<h2>Summary</h2><p>${results.summary || ''}</p>`;
          if (results.topics?.length) {
            html += `<h2>Key Topics</h2>` + results.topics.map(t => `<div class="card"><strong>${t.name}</strong> <span class="badge">${t.importance}% important</span><p>${t.summary}</p></div>`).join('');
          }
          if (results.questions?.length) {
            html += `<h2>Exam Questions</h2>` + results.questions.map((q,i) => `<div class="card"><p><strong>Q${i+1} (${q.type || 'theory'}):</strong> ${q.question}</p><div class="answer">${q.answer}</div></div>`).join('');
          }
          if (results.hotTopics?.length) {
            html += `<h2>Hot Topics</h2>` + results.hotTopics.map(t => `<div class="card"><strong>${t.topic}</strong> <span class="badge">${t.frequency}%</span><p>${t.note}</p></div>`).join('');
          }
          if (results.examTips?.length) {
            html += `<h2>Exam Tips</h2><ul>` + results.examTips.map(t => `<li>${t}</li>`).join('') + `</ul>`;
          }
          exportToPDF('Study Results', html);
        }}>📄 Export PDF</Btn>
      </div>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 20 }}>CramWiz analysis of your material.</p>
      <div style={{ display: 'flex', borderBottom: '1px solid var(--wf)', marginBottom: 22, overflowX: 'auto' }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: '11px 16px', border: 'none', background: 'transparent', color: tab === t.id ? 'var(--bb)' : 'var(--wd)', fontFamily: 'var(--fn)', fontWeight: 600, fontSize: '.82rem', borderBottom: tab === t.id ? '2px solid var(--bb)' : '2px solid transparent', cursor: 'pointer', whiteSpace: 'nowrap', marginBottom: -1 }}>{t.label}</button>
        ))}
      </div>
      {tab === 'summary' && (
        <div>
          <div style={S.resultBlock}>
            <h4 style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--bb)', marginBottom: 12, fontFamily: 'var(--fm)' }}>Overview</h4>
            <p style={{ fontSize: '.875rem', lineHeight: 1.75, color: 'var(--wd)' }}>{results.summary}</p>
            <div style={{ marginTop: 10 }}><VoiceBtn text={results.summary} /></div>
          </div>
          <p style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--wd)', fontFamily: 'var(--fm)', margin: '18px 0 10px' }}>Key Topics</p>
          {(results.topics || []).map((t, i) => (
            <div key={i} style={{ ...S.card, marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontWeight: 700 }}>{t.name}</span>
                <Badge color="blue">{t.importance}% important</Badge>
              </div>
              <div style={{ height: 4, background: 'var(--b4)', borderRadius: 2, marginBottom: 8, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: t.importance + '%', background: 'linear-gradient(90deg,var(--blue),var(--bb))', borderRadius: 2 }} />
              </div>
              <p style={{ fontSize: '.82rem', color: 'var(--wd)', lineHeight: 1.6 }}>{t.summary}</p>
            </div>
          ))}
        </div>
      )}
      {tab === 'questions' && (results.questions || []).map((q, i) => (
        <div key={i} style={S.qItem}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <Badge color="blue">Q{i+1}</Badge>
            <Badge color={q.type === 'calculation' ? 'red' : 'green'}>{q.type || 'theory'}</Badge>
          </div>
          <div style={{ fontWeight: 600, marginBottom: 8, fontSize: '.875rem', color: 'var(--white)' }}>{q.question}</div>
          <div style={{ fontSize: '.82rem', color: 'var(--wd)', lineHeight: 1.7, fontFamily: 'var(--fm)' }}>{q.answer}</div>
          <div style={{ marginTop: 10 }}><VoiceBtn text={`Question ${i+1}: ${q.question}. Answer: ${q.answer}`} /></div>
        </div>
      ))}
      {tab === 'hot' && (
        <div>
          {(!results.hotTopics || !results.hotTopics.length)
            ? <Alert type="info">Upload past questions alongside your material to unlock topic frequency mapping.</Alert>
            : (
              <>
                <Alert type="info" style={{ marginBottom: 16 }}>Based on your past questions — study these first.</Alert>
                {results.hotTopics.map((t, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 13px', background: 'var(--b4)', borderRadius: 'var(--rs)', marginBottom: 6 }}>
                      <div><div style={{ fontWeight: 600, fontSize: '.875rem' }}>{t.topic}</div><div style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 3 }}>{t.note}</div></div>
                      <Badge color="blue">{t.frequency}%</Badge>
                    </div>
                    <div style={{ height: 3, background: 'linear-gradient(90deg,var(--blue),var(--bb))', borderRadius: 2, marginBottom: 12, width: t.frequency + '%', boxShadow: '0 0 5px var(--blue)' }} />
                  </div>
                ))}
              </>
            )
          }
        </div>
      )}
      {tab === 'tips' && (
        <div style={S.resultBlock}>
          <h4 style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--bb)', marginBottom: 12, fontFamily: 'var(--fm)' }}>Exam Strategy</h4>
          <ul style={{ paddingLeft: 18 }}>
            {(results.examTips || []).map((t, i) => <li key={i} style={{ fontSize: '.875rem', lineHeight: 1.75, color: 'var(--wd)', marginBottom: 6 }}>{t}</li>)}
          </ul>
          <div style={{ marginTop: 10 }}><VoiceBtn text={(results.examTips || []).join('. ')} /></div>
        </div>
      )}
      {tab === 'project' && (
        <div>
          <Alert type="info" style={{ marginBottom: 16 }}>Use the Project Topic Generator (sidebar) for full proposals. These are quick suggestions from your material.</Alert>
          {(results.projectTopics || []).map((t, i) => (
            <div key={i} style={{ ...S.card, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Badge color="blue">{i+1}</Badge>
              <span style={{ fontWeight: 700 }}>{t}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionSolve({ files, setFile, solved, setSolved }) {
  const [course, setCourse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loaderText, setLoaderText] = useState('Reading your question paper...');

  useEffect(() => {
    if (!loading) return;
    const msgs = ['Reading your question paper...','Extracting all questions...','Solving calculations step by step...','Writing theory answers...','Almost done...'];
    let i = 0;
    const iv = setInterval(() => { i = (i + 1) % msgs.length; setLoaderText(msgs[i]); }, 3000);
    return () => clearInterval(iv);
  }, [loading]);

  const solve = async () => {
    if (!files.solveFile) return;
    setError(''); setLoading(true);
    try {
      const txt = await extractPdfText(files.solveFile);

      // Step 1 — extract questions list (small, fast)
      const extractPrompt = `You are CramWiz. Extract all questions from this exam paper.
${course ? 'Course: ' + course : ''}
PAPER: ${txt}
Respond ONLY with valid JSON (no extra text before or after):
{"paperTitle":"title","year":"year or Unknown","sections":[{"sectionName":"Section A","questions":[{"number":"1","question":"exact question text","type":"theory|calculation|mcq|short|diagram","marks":"5"}]}]}`;
      const extracted = await aiCall(extractPrompt, 4000);

      // Step 2 — solve each section in batches of 3 questions
      const allSections = [];
      for (const section of (extracted.sections || [])) {
        const qs = section.questions || [];
        const solvedQs = [];
        for (let i = 0; i < qs.length; i += 3) {
          const batch = qs.slice(i, i + 3);
          const batchPrompt = `You are CramWiz, a highly accurate AI exam solver for Nigerian university students.
${course ? 'Course: ' + course : ''}

SOLVE each of these ${batch.length} questions completely and accurately.
RULES:
- For CALCULATIONS: number every step, state formula, substitute values, give bold final answer with units.
- For THEORY: write a complete, direct answer — no vague summaries.
- For DIAGRAMS: represent clearly with ASCII/text, label all parts.
- For MCQ: state correct option AND explain why others are wrong.
- Be ACCURATE. Double-check every step.

Questions to solve:
${batch.map((q,idx) => `Q${idx+1} [${q.type||'theory'}] (${q.marks||'?'} marks): ${q.question}`).join('\n')}

You MUST return a JSON object with exactly ${batch.length} answer(s).
Respond ONLY with this exact JSON structure — no text before or after, no markdown:
{"answers":[${batch.map((_,idx)=>`{"number":${idx+1},"answer":"full solution here"}`).join(',')}]}
Replace each "full solution here" with the complete answer for that question.`;
          const solved = await aiCall(batchPrompt, 6000);
          const answers = solved.answers || [];
          answers.forEach((ans, idx) => {
            const orig = batch[idx] || {};
            solvedQs.push({ ...orig, answer: ans.answer || 'Could not solve this question.' });
          });
        }
        allSections.push({ sectionName: section.sectionName, questions: solvedQs });
      }

      setSolved({
        paperTitle: extracted.paperTitle || 'Past Question Paper',
        year: extracted.year || 'Unknown',
        totalQuestions: allSections.reduce((s, sec) => s + sec.questions.length, 0),
        sections: allSections,
        generalTips: ['Focus on questions with highest marks first', 'Show all workings — partial marks are awarded'],
      });
    } catch(e) { setError('Error: ' + e.message); }
    setLoading(false);
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Solve Past Questions</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 20 }}>Upload any unsolved paper — snap or PDF. Every question solved with full workings.</p>
      {error && <Alert type="error">{error}</Alert>}
      <Alert type="info" style={{ marginBottom: 16 }}>Camera snaps work. The clearer the image, the better the results.</Alert>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="grid-2">
        <UploadZone label="Question Paper" badge="Required" type="solveFile" files={files} onFile={setFile} />
        <div>
          <Input label="Course / Subject" value={course} onChange={setCourse} placeholder="e.g. Thermodynamics" />
          <div style={S.card}>
            <div style={{ fontWeight: 600, fontSize: '.875rem', marginBottom: 8 }}>What you get:</div>
            <ul style={{ paddingLeft: 14 }}>
              {['Every question answered','Step-by-step workings for calculations','Voice playback on each answer'].map((t,i) => <li key={i} style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 6 }}>{t}</li>)}
            </ul>
          </div>
        </div>
      </div>
      {loading ? <Loader text={loaderText} /> : <div style={{ marginTop: 18 }}><Btn onClick={solve} disabled={!files.solveFile}>Solve This Paper</Btn></div>}
      {solved && !loading && (
        <div style={{ marginTop: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <div><div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{solved.paperTitle || 'Past Question Paper'}</div><div style={{ color: 'var(--wd)', fontSize: '.82rem', marginTop: 4 }}>{solved.year || 'Year unknown'} · {solved.totalQuestions || '?'} questions</div></div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <Btn variant="outline" onClick={() => {
                let html = `<h2>${solved.paperTitle || 'Past Question Paper'} — ${solved.year || ''}</h2>`;
                if (solved.generalTips?.length) html += `<ul>${solved.generalTips.map(t => `<li>${t}</li>`).join('')}</ul><hr/>`;
                (solved.sections || []).forEach(sec => {
                  html += `<h2>${sec.sectionName}</h2>`;
                  (sec.questions || []).forEach(q => {
                    html += `<div class="card"><p><strong>Q${q.number} <span class="badge">${q.type||'theory'}</span>${q.marks ? ` <span class="badge badge-green">${q.marks} marks</span>` : ''}:</strong> ${q.question}</p><div class="answer">${q.answer}</div></div>`;
                  });
                });
                exportToPDF(solved.paperTitle || 'Past Question Solutions', html);
              }}>📄 Export PDF</Btn>
              <Badge color="green">Solved</Badge>
            </div>
          </div>
          {solved.generalTips?.length > 0 && <Alert type="info" style={{ marginBottom: 16 }}><ul style={{ paddingLeft: 14 }}>{solved.generalTips.map((t,i) => <li key={i} style={{ marginBottom: 6 }}>{t}</li>)}</ul></Alert>}
          {(solved.sections || []).map((sec, si) => (
            <div key={si} style={{ ...S.resultBlock, marginBottom: 16 }}>
              <h4 style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--bb)', marginBottom: 12, fontFamily: 'var(--fm)' }}>{sec.sectionName}</h4>
              {(sec.questions || []).map((q, qi) => (
                <div key={qi} style={S.qItem}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <Badge color="blue">Q{q.number}</Badge>
                    <div style={{ display: 'flex', gap: 6 }}>
                      {q.marks && <span style={{ fontSize: '.72rem', color: 'var(--wd)' }}>{q.marks} marks</span>}
                      <Badge color={q.type === 'calculation' ? 'red' : q.type === 'mcq' ? 'green' : 'blue'}>{q.type || 'theory'}</Badge>
                    </div>
                  </div>
                  <div style={{ fontWeight: 600, marginBottom: 8, fontSize: '.875rem', color: 'var(--white)' }}>{q.question}</div>
                  <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--wf)', fontSize: '.82rem', color: 'var(--wd)', lineHeight: 1.7, fontFamily: 'var(--fm)' }}>{q.answer}</div>
                  <div style={{ marginTop: 10 }}><VoiceBtn text={`Question ${q.number}: ${q.question}. Answer: ${q.answer}`} /></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionMapping({ files, setFile, mapping, setMapping }) {
  const [course, setCourse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const run = async () => {
    if (!files.mapMaterial || !files.mapPastQ) return;
    setError(''); setLoading(true);
    try {
      const mat = await extractPdfText(files.mapMaterial);
      const pq = await extractPdfText(files.mapPastQ);
      const prompt = `You are CramWiz, a highly accurate AI pattern mapper for Nigerian university exam prep.${course ? '\nCourse: ' + course : ''}
MATERIAL: ${mat}
PAST QUESTIONS: ${pq}

Map all past questions against the material with precision. Identify exact frequencies, spot cold topics, and make well-reasoned predictions.
Respond ONLY with valid JSON (no markdown, no backticks):
{"summary":"2-3 precise sentences on the exam pattern","hotTopics":[{"topic":"name","frequency":85,"note":"appeared 4/5 years","chapters":"ch 3,5"}],"coldTopics":[{"topic":"name","note":"low priority reason"}],"questionStyles":[{"style":"Long theory","percentage":60,"note":"2-3 per paper"}],"predictions":[{"question":"predicted exam question (specific and realistic)","answer":"model answer with steps or explanation","reason":"pattern-based reason","priority":"high|medium|low"}],"studyPlan":["actionable step 1","actionable step 2","actionable step 3"]}`;
      const r = await aiCall(prompt, 3000);
      setMapping(r);
    } catch(e) { setError('Error: ' + e.message); }
    setLoading(false);
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Pattern Mapping</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 20 }}>Upload your textbook AND past questions. CramWiz maps which topics keep coming out and predicts what's next.</p>
      {error && <Alert type="error">{error}</Alert>}
      <Alert type="info" style={{ marginBottom: 16 }}>Both files required. More years of past questions = more accurate patterns.</Alert>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="grid-2">
        <UploadZone label="Textbook / Notes" badge="Required" type="mapMaterial" files={files} onFile={setFile} />
        <UploadZone label="Past Questions" badge="Required" type="mapPastQ" files={files} onFile={setFile} />
      </div>
      <div style={{ ...S.card, maxWidth: 380, marginTop: 14 }}><Input label="Course" value={course} onChange={setCourse} placeholder="e.g. Organic Chemistry" /></div>
      {loading ? <Loader text="Mapping question patterns..." /> : <div style={{ marginTop: 18 }}><Btn onClick={run} disabled={!files.mapMaterial || !files.mapPastQ}>Run Pattern Mapping</Btn></div>}
      {mapping && !loading && (
        <div style={{ marginTop: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <Alert type="info" style={{ margin: 0, flex: 1, marginRight: 12 }}>{mapping.summary}</Alert>
            <Btn variant="outline" onClick={() => {
              let html = `<p>${mapping.summary}</p>`;
              if (mapping.hotTopics?.length) {
                html += `<h2>Hot Topics — Study First</h2>` + mapping.hotTopics.map(t => `<div class="card"><strong>${t.topic}</strong> <span class="badge">${t.frequency}%</span><p>${t.note}${t.chapters ? ' · ' + t.chapters : ''}</p></div>`).join('');
              }
              if (mapping.coldTopics?.length) {
                html += `<h2>Low Priority Topics</h2><ul>` + mapping.coldTopics.map(t => `<li><strong>${t.topic}</strong> — ${t.note}</li>`).join('') + `</ul>`;
              }
              if (mapping.questionStyles?.length) {
                html += `<h2>Question Style Breakdown</h2>` + mapping.questionStyles.map(s => `<div class="card"><strong>${s.style}</strong> — ${s.percentage}%<p>${s.note}</p></div>`).join('');
              }
              if (mapping.predictions?.length) {
                html += `<h2>Predicted Questions</h2>` + mapping.predictions.map((p,i) => `<div class="card"><p><span class="badge">Prediction ${i+1}</span> <span class="badge badge-${p.priority==='high'?'red':'green'}">${p.priority}</span></p><p><strong>${p.question}</strong></p><div class="answer">${p.answer || ''}</div><p><em>Why: ${p.reason}</em></p></div>`).join('');
              }
              if (mapping.studyPlan?.length) {
                html += `<h2>Recommended Study Plan</h2><ol>` + mapping.studyPlan.map(s => `<li>${s}</li>`).join('') + `</ol>`;
              }
              exportToPDF('Pattern Mapping Report', html);
            }}>📄 Export PDF</Btn>
          </div>
          <div style={{ ...S.resultBlock, marginBottom: 14 }}>
            <h4 style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--bb)', marginBottom: 12, fontFamily: 'var(--fm)' }}>Hot Topics — Study First</h4>
            {(mapping.hotTopics || []).map((t, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 13px', background: 'var(--b4)', borderRadius: 'var(--rs)', marginBottom: 6 }}>
                  <div><div style={{ fontWeight: 600, fontSize: '.875rem' }}>{t.topic}</div><div style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 3 }}>{t.note}{t.chapters ? ' · ' + t.chapters : ''}</div></div>
                  <Badge color="blue">{t.frequency}%</Badge>
                </div>
                <div style={{ height: 3, background: 'linear-gradient(90deg,var(--blue),var(--bb))', width: t.frequency + '%', borderRadius: 2, marginBottom: 12 }} />
              </div>
            ))}
          </div>
          <div style={{ ...S.resultBlock, marginBottom: 14 }}>
            <h4 style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--bb)', marginBottom: 12, fontFamily: 'var(--fm)' }}>Question Style Breakdown</h4>
            {(mapping.questionStyles || []).map((s, i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}><span style={{ fontWeight: 600, fontSize: '.875rem' }}>{s.style}</span><span style={{ fontFamily: 'var(--fm)', color: 'var(--bb)', fontSize: '.875rem' }}>{s.percentage}%</span></div>
                <div style={{ height: 4, background: 'var(--b4)', borderRadius: 2, overflow: 'hidden' }}><div style={{ height: '100%', width: s.percentage + '%', background: 'linear-gradient(90deg,var(--blue),var(--bb))' }} /></div>
                <div style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 3 }}>{s.note}</div>
              </div>
            ))}
          </div>
          <div style={{ ...S.resultBlock, marginBottom: 14 }}>
            <h4 style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--bb)', marginBottom: 12, fontFamily: 'var(--fm)' }}>Predicted Questions</h4>
            {(mapping.predictions || []).map((p, i) => (
              <div key={i} style={S.qItem}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}><Badge color="blue">Prediction {i+1}</Badge><Badge color={p.priority==='high'?'red':p.priority==='medium'?'blue':'green'}>{p.priority}</Badge></div>
                <div style={{ fontWeight: 600, marginBottom: 8, fontSize: '.875rem', color: 'var(--white)' }}>{p.question}</div>
                <div style={{ fontSize: '.82rem', color: 'var(--wd)' }}>Why: {p.reason}</div>
              </div>
            ))}
          </div>
          <div style={S.resultBlock}>
            <h4 style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--bb)', marginBottom: 12, fontFamily: 'var(--fm)' }}>Recommended Study Plan</h4>
            <ul style={{ paddingLeft: 18 }}>{(mapping.studyPlan || []).map((s, i) => <li key={i} style={{ fontSize: '.875rem', color: 'var(--wd)', lineHeight: 1.75, marginBottom: 8 }}>{s}</li>)}</ul>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionQbank() {
  const [topic, setTopic] = useState('');
  const [course, setCourse] = useState('');
  const [difficulty, setDifficulty] = useState('mixed');
  const [count, setCount] = useState('10');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  const generate = async () => {
    if (!topic) { setError('Please enter a topic.'); return; }
    setError(''); setLoading(true);
    try {
      const prompt = `You are CramWiz, a highly accurate AI question bank generator for Nigerian university students.
Topic: ${topic}${course ? '\nCourse: ' + course : ''}
Difficulty: ${difficulty}

Generate exactly ${count} exam-standard questions on this topic.
- Questions must be varied in style (theory, calculation, short answer, MCQ where appropriate)
- Each answer must be COMPLETE, ACCURATE, and practically solved — not just described
- For calculations: show all working steps
- For diagrams: describe them with text/ASCII clearly
- Do NOT repeat question styles consecutively — mix them up

Respond ONLY with valid JSON (no markdown, no backticks):
{"topic":"${topic}","questions":[{"number":1,"question":"full question text","answer":"complete model answer with all workings/explanations","type":"theory|calculation|mcq|short|diagram","difficulty":"easy|medium|hard","hint":"brief strategic hint"}]}`;
      const r = await aiCall(prompt, 3500);
      setResults(r);
    } catch(e) { setError('Error: ' + e.message); }
    setLoading(false);
  };

  const dc = { easy: 'green', medium: 'blue', hard: 'red' };
  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Question Bank</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 24 }}>Generate a bank of possible exam questions on any topic you enter.</p>
      {error && <Alert type="error">{error}</Alert>}
      <div style={S.card}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="grid-2">
          <Input label="Topic" value={topic} onChange={setTopic} placeholder="e.g. Mitosis and Meiosis" />
          <Input label="Course / Subject" value={course} onChange={setCourse} placeholder="e.g. Biology" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 0 }} className="grid-2">
          <Select label="Difficulty" value={difficulty} onChange={setDifficulty} options={[{ value:'mixed',label:'Mixed — all levels'},{ value:'easy',label:'Easy'},{ value:'medium',label:'Medium'},{ value:'hard',label:'Hard — exam level'}]} />
          <Select label="Number of Questions" value={count} onChange={setCount} options={[{value:'10',label:'10 questions'},{value:'20',label:'20 questions'},{value:'30',label:'30 questions'}]} />
        </div>
        <Btn onClick={generate} disabled={loading} style={{ marginTop: 4 }}>Generate Question Bank</Btn>
      </div>
      {loading && <Loader text="Building your question bank..." />}
      {results && !loading && (
        <div style={{ marginTop: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{results.topic}</div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <Btn variant="outline" onClick={() => {
                const html = `<h2>Topic: ${results.topic}</h2>` + (results.questions || []).map(q =>
                  `<div class="card"><p><strong>Q${q.number}</strong> <span class="badge">${q.type||'theory'}</span> <span class="badge badge-${q.difficulty==='hard'?'red':q.difficulty==='easy'?'green':'blue'}">${q.difficulty||'medium'}</span></p><p>${q.question}</p><div class="answer">${q.answer}</div>${q.hint ? `<p><em>💡 Hint: ${q.hint}</em></p>` : ''}</div>`
                ).join('');
                exportToPDF(`Question Bank — ${results.topic}`, html);
              }}>📄 Export PDF</Btn>
              <Badge color="blue">{(results.questions || []).length} Questions</Badge>
            </div>
          </div>
          {(results.questions || []).map((q, i) => (
            <div key={i} style={S.qItem}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <Badge color="blue">Q{q.number}</Badge>
                <div style={{ display: 'flex', gap: 6 }}>
                  <Badge color={dc[q.difficulty] || 'blue'}>{q.difficulty || 'mixed'}</Badge>
                  <Badge color="blue">{q.type || 'theory'}</Badge>
                </div>
              </div>
              <div style={{ fontWeight: 600, marginBottom: 8, fontSize: '.875rem', color: 'var(--white)' }}>{q.question}</div>
              <div style={{ fontSize: '.82rem', color: 'var(--wd)', lineHeight: 1.7, fontFamily: 'var(--fm)' }}>{q.answer}</div>
              {q.hint && <div style={{ fontSize: '.72rem', color: 'var(--gold)', marginTop: 8 }}>Hint: {q.hint}</div>}
              <div style={{ marginTop: 10 }}><VoiceBtn text={`Question ${q.number}: ${q.question}. Answer: ${q.answer}`} /></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionManual({ files, setFile }) {
  const [course, setCourse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  const solve = async () => {
    if (!files.manualFile) return;
    setError(''); setLoading(true);
    try {
      const manual = await extractPdfText(files.manualFile);
      const notes = files.manualNotes ? await extractPdfText(files.manualNotes) : '';
      const prompt = `You are CramWiz, a highly accurate AI manual and worksheet solver for Nigerian university students.${course ? '\nCourse: ' + course : ''}
A student has uploaded a manual/worksheet to be solved.${notes ? ' Their textbook/notes are also provided for context.' : ''}

CRITICAL INSTRUCTIONS:
- Solve EVERY question, exercise, and fill-in item without skipping any.
- For calculations: number every step. Show the formula, substitution, and final answer clearly.
- For theory: give a complete, accurate, well-structured answer — not a vague summary.
- For diagrams: describe them precisely using text or ASCII, label all parts.
- Be as accurate as a university lecturer marking a script.

MANUAL:
${manual}
${notes ? '\nSTUDENT NOTES:\n' + notes : ''}

Respond ONLY with valid JSON (no markdown, no backticks):
{"title":"Manual/worksheet title","items":[{"number":"1","question":"the question or exercise item","solution":"complete step-by-step solution","explanation":"concept explanation — why this answer is correct"}],"keyConcepts":["key concept 1"],"studyTips":["study tip 1"]}`;
      const r = await aiCall(prompt, 4000);
      setResults(r);
    } catch(e) { setError('Error: ' + e.message); }
    setLoading(false);
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Solve Manuals & Worksheets</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 20 }}>Upload photos of your filled-in manual or worksheet. CramWiz solves and explains everything.</p>
      {error && <Alert type="error">{error}</Alert>}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="grid-2">
        <UploadZone label="Manual / Worksheet" badge="Required" type="manualFile" files={files} onFile={setFile} />
        <UploadZone label="Your Notes / Textbook" badge="Optional" type="manualNotes" files={files} onFile={setFile} />
      </div>
      <div style={{ ...S.card, maxWidth: 380, marginTop: 14 }}><Input label="Course / Subject" value={course} onChange={setCourse} placeholder="e.g. Electrical Engineering" /></div>
      {loading ? <Loader text="Analysing and solving your manual..." /> : <div style={{ marginTop: 18 }}><Btn onClick={solve} disabled={!files.manualFile}>Solve This Manual</Btn></div>}
      {results && !loading && (
        <div style={{ marginTop: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{results.title || 'Manual Solutions'}</div>
            <Btn variant="outline" onClick={() => {
              let html = `<h2>${results.title || 'Manual Solutions'}</h2>`;
              if (results.keyConcepts?.length) html += `<p><strong>Key Concepts:</strong> ${results.keyConcepts.join(', ')}</p>`;
              if (results.studyTips?.length) html += `<ul>${results.studyTips.map(t=>`<li>${t}</li>`).join('')}</ul><hr/>`;
              html += (results.items || []).map(it =>
                `<div class="card"><p><span class="badge">Item ${it.number}</span> <strong>${it.question}</strong></p><div class="answer">${it.solution}</div>${it.explanation ? `<p><em>${it.explanation}</em></p>` : ''}</div>`
              ).join('');
              exportToPDF(results.title || 'Manual Solutions', html);
            }}>📄 Export PDF</Btn>
          </div>
          {results.keyConcepts?.length > 0 && <div style={{ marginBottom: 14 }}>{results.keyConcepts.map((c,i) => <Badge key={i} color="blue" style={{ marginRight: 4 }}>{c}</Badge>)}</div>}
          {results.studyTips?.length > 0 && <Alert type="info" style={{ marginBottom: 14 }}><ul style={{ paddingLeft: 14 }}>{results.studyTips.map((t,i) => <li key={i} style={{ marginBottom: 6 }}>{t}</li>)}</ul></Alert>}
          {(results.items || []).map((it, i) => (
            <div key={i} style={S.qItem}>
              <Badge color="blue" style={{ marginBottom: 8 }}>Item {it.number}</Badge>
              <div style={{ fontWeight: 600, marginBottom: 8, fontSize: '.875rem', color: 'var(--white)' }}>{it.question}</div>
              <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--wf)' }}>
                <div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--bb)', marginBottom: 4, fontFamily: 'var(--fm)' }}>Solution</div>
                <div style={{ fontSize: '.82rem', color: 'var(--wd)', fontFamily: 'var(--fm)', lineHeight: 1.7 }}>{it.solution}</div>
              </div>
              {it.explanation && <div style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid var(--wf)', fontSize: '.75rem', color: 'var(--wd)' }}>{it.explanation}</div>}
              <div style={{ marginTop: 10 }}><VoiceBtn text={`Item ${it.number}: ${it.question}. Solution: ${it.solution}`} /></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionNotepad() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState(() => { try { return localStorage.getItem('cw3_draft') || ''; } catch { return ''; } });
  const [notes, setNotes] = useState(() => DB.get('notes') || []);
  const [saved, setSaved] = useState('');

  const save = () => {
    if (!text.trim()) return;
    const t = title.trim() || 'Untitled Note';
    const n = [...notes];
    n.unshift({ id: Date.now(), title: t, text: text.trim(), date: new Date().toISOString() });
    if (n.length > 50) n.splice(50);
    DB.set('notes', n); setNotes(n); setTitle(''); setText(''); localStorage.removeItem('cw3_draft');
    setSaved('Note saved!'); setTimeout(() => setSaved(''), 2500);
  };

  const del = (id) => { const n = notes.filter(x => x.id !== id); DB.set('notes', n); setNotes(n); };
  const load = (note) => { setTitle(note.title); setText(note.text); window.scrollTo(0,0); };

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Notepad</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 20 }}>Your personal study notes. Saved automatically on this device.</p>
      {saved && <Alert type="success">{saved}</Alert>}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10, flexWrap: 'wrap' }}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Note title..." style={{ ...S.input, flex: 1, minWidth: 160 }} />
        <Btn onClick={save}>Save Note</Btn>
        <Btn variant="outline" onClick={() => { setText(''); setTitle(''); localStorage.removeItem('cw3_draft'); }}>Clear</Btn>
      </div>
      <textarea value={text} onChange={e => { setText(e.target.value); try { localStorage.setItem('cw3_draft', e.target.value); } catch {} }} placeholder="Write your study notes here..." style={{ ...S.input, minHeight: 280, resize: 'vertical', lineHeight: 1.7 }} />
      {notes.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <p style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 10 }}>Saved Notes</p>
          {notes.map(n => (
            <div key={n.id} style={{ ...S.card, marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontWeight: 600, fontSize: '.875rem' }}>{n.title}</span>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ fontSize: '.72rem', color: 'var(--wd)' }}>{new Date(n.date).toLocaleDateString()}</span>
                  <button onClick={() => load(n)} style={{ background: 'none', border: 'none', color: 'var(--bb)', cursor: 'pointer', fontSize: '.75rem' }}>Load</button>
                  <button onClick={() => del(n.id)} style={{ background: 'none', border: 'none', color: 'var(--red)', cursor: 'pointer', fontSize: '.75rem' }}>Delete</button>
                </div>
              </div>
              <p style={{ color: 'var(--wd)', fontSize: '.82rem', whiteSpace: 'pre-wrap', maxHeight: 60, overflow: 'hidden' }}>{n.text.slice(0, 120)}{n.text.length > 120 ? '...' : ''}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionCommunity({ user }) {
  const [text, setText] = useState('');
  const [dept, setDept] = useState('');
  const [uni, setUni] = useState('');
  const [posts, setPosts] = useState(() => DB.get('posts') || []);

  const post = () => {
    if (!text.trim()) return;
    const p = [...posts];
    p.unshift({ id: Date.now(), author: user.name, dept, uni, text: text.trim(), time: new Date().toISOString() });
    if (p.length > 200) p.splice(200);
    DB.set('posts', p); setPosts(p); setText('');
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Student Community</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 24 }}>Connect with students across departments and universities in Nigeria.</p>
      <div style={S.card}>
        <div style={{ marginBottom: 16 }}>
          <label style={S.label}>Share something</label>
          <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Ask a question, share a resource, or start a discussion..." style={{ ...S.input, minHeight: 70, resize: 'vertical' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="grid-2">
          <Input label="Department" value={dept} onChange={setDept} placeholder="e.g. Computer Science" />
          <Input label="University" value={uni} onChange={setUni} placeholder="e.g. UNILAG" />
        </div>
        <Btn onClick={post}>Post</Btn>
      </div>
      <div style={{ marginTop: 16 }}>
        {posts.length === 0
          ? <div style={{ textAlign: 'center', padding: 24, color: 'var(--wd)', fontSize: '.875rem' }}>No posts yet. Be the first!</div>
          : posts.map(p => (
            <div key={p.id} style={{ background: 'var(--b3)', border: '1px solid var(--wf)', borderRadius: 'var(--r)', padding: 14, marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg,var(--blue),var(--bb))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '.8rem', flexShrink: 0 }}>{(p.author||'A')[0]}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '.875rem' }}>{p.author}</div>
                  <div style={{ fontSize: '.72rem', color: 'var(--wd)' }}>{[p.dept, p.uni].filter(Boolean).join(' · ') || 'CramWiz Student'} · {ago(p.time)}</div>
                </div>
              </div>
              <div style={{ fontSize: '.875rem', color: 'var(--wd)', lineHeight: 1.65 }}>{p.text}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

function SectionAmbassador({ user }) {
  const [ambs, setAmbs] = useState({});
  const [ambLoaded, setAmbLoaded] = useState(false);
  const [customCode, setCustomCode] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankAcct, setBankAcct] = useState('');
  const [bankAcctName, setBankAcctName] = useState('');
  const [joinErr, setJoinErr] = useState('');

  useEffect(() => {
    SDB.get('ambassadors').then(a => { setAmbs(a || {}); setAmbLoaded(true); });
  }, []);

  const isAmb = !!ambs[user.email];
  const amb = ambs[user.email];

  const join = async () => {
    setJoinErr('');
    if (!customCode.trim()) { setJoinErr('Enter your preferred referral code name.'); return; }
    if (!bankName.trim() || !bankAcct.trim() || !bankAcctName.trim()) { setJoinErr('Fill in all bank account details — this is how you get paid.'); return; }
    const slug = customCode.trim().replace(/[^A-Z0-9]/gi, '').toUpperCase().slice(0, 12);
    if (slug.length < 3) { setJoinErr('Code must be at least 3 characters.'); return; }
    const existing = Object.values(ambs).find(a => a.code === slug);
    if (existing) { setJoinErr('That referral code is already taken. Choose another.'); return; }
    const a = { ...ambs, [user.email]: { code: slug, name: user.name, email: user.email, bankName, bankAcct, bankAcctName, referrals: 0, earned: 0, signups: [], joinedAt: new Date().toISOString() } };
    await SDB.set('ambassadors', a); setAmbs(a);
  };

  const refLink = typeof window !== 'undefined' ? `${window.location.origin}?ref=${amb?.code}` : '';

  if (!ambLoaded) return <Loader text="Loading ambassador data…" />;

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Ambassador Program</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 24 }}>Spread the word about CramWiz and earn ₦1,000 for every student who signs up through your link.</p>
      {!isAmb ? (
        <div style={S.cardBlue}>
          <h3 style={{ fontWeight: 700, marginBottom: 8, fontSize: '1.1rem' }}>Become a CramWiz Ambassador</h3>
          <p style={{ color: 'var(--wd)', fontSize: '.875rem', lineHeight: 1.7, marginBottom: 16 }}>Share your unique referral link. Earn ₦1,000 for each student who successfully subscribes through it. No cap on earnings.</p>
          <ul style={{ paddingLeft: 16, color: 'var(--wd)', fontSize: '.875rem', lineHeight: 2, marginBottom: 20 }}>
            <li>Share your unique referral link</li>
            <li>Earn ₦1,000 for each successful sign-up</li>
            <li>Track your referrals and earnings</li>
            <li>No limit on how much you can earn</li>
          </ul>
          {joinErr && <Alert type="error">{joinErr}</Alert>}
          <Input label="Choose Your Referral Code Name" value={customCode} onChange={setCustomCode} placeholder="e.g. IBINABO or MILTECHX" hint="This becomes your unique referral link. Letters and numbers only, max 12 characters." />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="grid-2">
            <Input label="Bank Name" value={bankName} onChange={setBankName} placeholder="e.g. Moniepoint" />
            <Input label="Account Number" value={bankAcct} onChange={setBankAcct} placeholder="10-digit number" />
          </div>
          <Input label="Account Name" value={bankAcctName} onChange={setBankAcctName} placeholder="Name on the account" hint="Commission (₦1,000 per referral) will be paid to this account." />
          <Btn size="lg" onClick={join}>Join as Ambassador — It's Free</Btn>
        </div>
      ) : (
        <div>
          <div style={S.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div><div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Ambassador Dashboard</div><div style={{ color: 'var(--wd)', fontSize: '.72rem', fontFamily: 'var(--fm)', marginTop: 4 }}>Code: {amb.code}</div></div>
              <Badge color="gold">Ambassador</Badge>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
              <div style={{ background: 'var(--b3)', borderRadius: 'var(--r)', padding: 16, textAlign: 'center' }}>
                <div style={{ fontSize: '.72rem', color: 'var(--wd)', fontFamily: 'var(--fm)', textTransform: 'uppercase', marginBottom: 4 }}>Total Referrals</div>
                <div style={{ fontWeight: 800, fontSize: '1.8rem', color: 'var(--bb)' }}>{amb.referrals || 0}</div>
              </div>
              <div style={{ background: 'var(--b3)', borderRadius: 'var(--r)', padding: 16, textAlign: 'center' }}>
                <div style={{ fontSize: '.72rem', color: 'var(--wd)', fontFamily: 'var(--fm)', textTransform: 'uppercase', marginBottom: 4 }}>Total Earned</div>
                <div style={{ fontWeight: 800, fontSize: '1.8rem', color: 'var(--green)' }}>₦{(amb.earned || 0).toLocaleString()}</div>
              </div>
            </div>
            <label style={S.label}>Your Referral Link</label>
            <div style={{ display: 'flex', gap: 8 }}>
              <input type="text" value={refLink} readOnly style={{ ...S.input, flex: 1, fontSize: '.78rem' }} />
              <Btn onClick={() => navigator.clipboard.writeText(refLink).then(() => alert('Link copied!'))}>Copy</Btn>
            </div>
            <p style={{ fontSize: '.72rem', color: 'var(--wd)', marginTop: 6 }}>Share this link. Every student who signs up through it earns you ₦1,000.</p>
            {amb.bankName && (
              <div style={{ marginTop: 14, padding: '10px 14px', background: 'var(--b3)', borderRadius: 'var(--rs)', fontSize: '.78rem', color: 'var(--wd)' }}>
                <span style={{ fontWeight: 700, color: 'var(--white)' }}>Payout account: </span>{amb.bankAcctName} · {amb.bankAcct} · {amb.bankName}
              </div>
            )}
          </div>
          {amb.signups?.length > 0 && (
            <div style={{ ...S.card, marginTop: 14 }}>
              <p style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 12 }}>Recent Referrals</p>
              {amb.signups.slice(0, 10).map((s, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: '1px solid var(--wf)' }}>
                  <span style={{ fontSize: '.875rem' }}>{s.name}</span>
                  <span style={{ fontSize: '.72rem', color: 'var(--wd)', fontFamily: 'var(--fm)' }}>{new Date(s.date).toLocaleDateString()}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SectionProject() {
  const [dept, setDept] = useState('');
  const [course, setCourse] = useState('');
  const [focus, setFocus] = useState('');
  const [count, setCount] = useState('5');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  const generate = async () => {
    if (!dept) { setError('Please enter your department.'); return; }
    setError(''); setLoading(true);
    try {
      const n = parseInt(count);
      // Generate in batches of 3 to avoid JSON truncation
      const batches = Math.ceil(n / 3);
      let all = [];
      for (let b = 0; b < batches; b++) {
        const batchSize = Math.min(3, n - all.length);
        const prompt = `You are CramWiz, AI final year project advisor for Nigerian university students.
Department: ${dept}
Programme: ${course || dept}
Area of Focus: ${focus || 'general'}
Generate exactly ${batchSize} final year project topics with full proposals. Start numbering from ${all.length + 1}.
IMPORTANT: Keep each field concise. Respond ONLY with valid JSON — no text before or after:
{"topics":[{"number":${all.length + 1},"title":"Full project title","problem":"1-2 sentences on the problem","objectives":["objective 1","objective 2","objective 3"],"methodology":"2-3 sentences","tools":"list of tools/technologies","novelty":"1 sentence on uniqueness","difficulty":"easy|medium|challenging"}]}
Make topics relevant to Nigerian context and current industry needs.`;
        const r = await aiCall(prompt, 6000);
        all = all.concat(r.topics || []);
      }
      setResults({ topics: all });
    } catch(e) { setError('Error: ' + e.message); }
    setLoading(false);
  };

  const dc = { easy: 'green', medium: 'blue', challenging: 'red' };
  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Project Topic Generator</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 24 }}>Generate final year project topics and full proposals. No upload needed — just tell us your focus.</p>
      {error && <Alert type="error">{error}</Alert>}
      <div style={S.card}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="grid-2">
          <Input label="Your Department" value={dept} onChange={setDept} placeholder="e.g. Computer Science" />
          <Input label="Course / Programme" value={course} onChange={setCourse} placeholder="e.g. B.Sc Computer Science" />
        </div>
        <Input label="Area of Focus / Interest" value={focus} onChange={setFocus} placeholder="e.g. Machine Learning, Healthcare, Agriculture, FinTech..." />
        <Select label="Number of Topics" value={count} onChange={setCount} options={[{value:'5',label:'5 topics'},{value:'10',label:'10 topics'},{value:'15',label:'15 topics'}]} />
        <Btn onClick={generate} disabled={loading}>Generate Project Topics</Btn>
      </div>
      {loading && <Loader text="Generating project topics..." />}
      {results && !loading && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0 8px' }}>
            <p style={{ fontSize: '.82rem', color: 'var(--wd)' }}>{(results.topics || []).length} topics generated</p>
            <Btn variant="outline" onClick={() => {
              const html = `<h2>${dept} — ${course || dept}</h2><p><em>Focus: ${focus || 'General'}</em></p><hr/>` +
                (results.topics || []).map(t => `
                <div class="card">
                  <h3>${t.number}. ${t.title}</h3>
                  <p><span class="badge badge-${t.difficulty==='challenging'?'red':t.difficulty==='easy'?'green':'blue'}">${t.difficulty||'medium'}</span></p>
                  <p><strong>Problem Statement:</strong><br/>${t.problem}</p>
                  <p><strong>Objectives:</strong></p>
                  <ol>${(t.objectives||[]).map(o=>`<li>${o}</li>`).join('')}</ol>
                  <p><strong>Methodology:</strong><br/>${t.methodology}</p>
                  <p><strong>Tools / Technologies:</strong><br/>${t.tools}</p>
                  <p><strong>What Makes It Unique:</strong><br/>${t.novelty}</p>
                </div>`).join('');
              exportToPDF(`Final Year Project Proposals — ${dept}`, html);
            }}>📄 Export All to PDF</Btn>
          </div>
          {(results.topics || []).map((t, i) => (
          <div key={i} style={{ ...S.card, marginTop: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
              <div style={{ fontWeight: 700, fontSize: '1rem', flex: 1, marginRight: 10 }}>{t.number}. {t.title}</div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <Btn variant="ghost" onClick={() => {
                  const html = `<h2>${t.number}. ${t.title}</h2>
                    <p><span class="badge badge-${t.difficulty==='challenging'?'red':t.difficulty==='easy'?'green':'blue'}">${t.difficulty||'medium'}</span> — ${dept}</p><hr/>
                    <p><strong>Problem Statement:</strong><br/>${t.problem}</p>
                    <p><strong>Objectives:</strong></p><ol>${(t.objectives||[]).map(o=>`<li>${o}</li>`).join('')}</ol>
                    <p><strong>Methodology:</strong><br/>${t.methodology}</p>
                    <p><strong>Tools / Technologies:</strong><br/>${t.tools}</p>
                    <p><strong>What Makes It Unique:</strong><br/>${t.novelty}</p>`;
                  exportToPDF(t.title, html);
                }} style={{ fontSize: '.75rem', padding: '4px 10px' }}>📄 PDF</Btn>
                <Badge color={dc[t.difficulty] || 'blue'}>{t.difficulty || 'medium'}</Badge>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }} className="grid-2">
              <div><div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: .5, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 4 }}>Problem Statement</div><p style={{ fontSize: '.82rem', color: 'var(--wd)' }}>{t.problem}</p></div>
              <div><div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: .5, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 4 }}>Tools / Stack</div><p style={{ fontSize: '.82rem', color: 'var(--wd)' }}>{t.tools}</p></div>
            </div>
            <div style={{ marginBottom: 12 }}><div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: .5, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 4 }}>Objectives</div><ul style={{ paddingLeft: 16 }}>{(t.objectives || []).map((o, oi) => <li key={oi} style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 4 }}>{o}</li>)}</ul></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="grid-2">
              <div><div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: .5, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 4 }}>Methodology</div><p style={{ fontSize: '.82rem', color: 'var(--wd)' }}>{t.methodology}</p></div>
              <div><div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: .5, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 4 }}>What Makes It Unique</div><p style={{ fontSize: '.82rem', color: 'var(--wd)' }}>{t.novelty}</p></div>
            </div>
          </div>
        ))}
        </div>
      )}
    </div>
  );
}

function SectionAccount({ user }) {
  const [curPw, setCurPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [conPw, setConPw] = useState('');
  const [dept, setDept] = useState(user.dept || '');
  const [uni, setUni] = useState(user.uni || '');
  const [pwMsg, setPwMsg] = useState('');
  const [pwErr, setPwErr] = useState('');
  const [profMsg, setProfMsg] = useState('');

  const changePw = async () => {
    setPwErr(''); setPwMsg('');
    const users = await SDB.get('users') || {};
    const u = users[user.email];
    if (!u || u.pw !== hash(curPw)) { setPwErr('Current password is incorrect.'); return; }
    if (newPw.length < 6) { setPwErr('New password must be at least 6 characters.'); return; }
    if (newPw !== conPw) { setPwErr('Passwords do not match.'); return; }
    u.pw = hash(newPw);
    await SDB.set('users', users);
    setPwMsg('Password updated!'); setCurPw(''); setNewPw(''); setConPw('');
    setTimeout(() => setPwMsg(''), 3000);
  };

  const updateProfile = async () => {
    const users = await SDB.get('users') || {};
    if (!users[user.email]) return;
    users[user.email].dept = dept; users[user.email].uni = uni;
    await SDB.set('users', users);
    const u = DB.get('user') || {};
    u.dept = dept; u.uni = uni; DB.set('user', u);
    setProfMsg('Profile updated!'); setTimeout(() => setProfMsg(''), 3000);
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>My Account</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 24 }}>Manage your profile and settings.</p>
      <div style={{ ...S.card, marginBottom: 16 }}>
        <h4 style={{ fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 14 }}>Profile</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }} className="grid-2">
          <div><div style={{ fontSize: '.72rem', color: 'var(--wd)', fontFamily: 'var(--fm)', textTransform: 'uppercase', marginBottom: 4 }}>Name</div><div style={{ fontWeight: 700 }}>{user.name}</div></div>
          <div><div style={{ fontSize: '.72rem', color: 'var(--wd)', fontFamily: 'var(--fm)', textTransform: 'uppercase', marginBottom: 4 }}>Email</div><div style={{ fontSize: '.875rem' }}>{user.email}</div></div>
        </div>
        <Badge color={user.isFy ? 'gold' : 'blue'}>{user.isFy ? 'Final Year Student' : 'Student'}</Badge>
      </div>
      <div style={{ ...S.card, marginBottom: 16 }}>
        <h4 style={{ fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 14 }}>Update Profile</h4>
        {profMsg && <Alert type="success">{profMsg}</Alert>}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="grid-2">
          <Input label="Department" value={dept} onChange={setDept} placeholder="Your department" />
          <Input label="University" value={uni} onChange={setUni} placeholder="Your university" />
        </div>
        <Btn variant="outline" onClick={updateProfile}>Save Changes</Btn>
      </div>
      <div style={S.card}>
        <h4 style={{ fontSize: '.72rem', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--wd)', fontFamily: 'var(--fm)', marginBottom: 14 }}>Change Password</h4>
        {pwErr && <Alert type="error">{pwErr}</Alert>}
        {pwMsg && <Alert type="success">{pwMsg}</Alert>}
        <Input label="Current Password" type="password" value={curPw} onChange={setCurPw} placeholder="Current password" />
        <Input label="New Password" type="password" value={newPw} onChange={setNewPw} placeholder="New password" />
        <Input label="Confirm New Password" type="password" value={conPw} onChange={setConPw} placeholder="Confirm new password" />
        <Btn onClick={changePw}>Update Password</Btn>
      </div>
    </div>
  );
}

function SectionFeedback({ user }) {
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState('general');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState('');

  const send = async () => {
    if (!message.trim()) { setErr('Please write your feedback.'); return; }
    if (rating === 0) { setErr('Please give a star rating.'); return; }
    setErr(''); setSending(true);
    try {
      const fd = new FormData();
      fd.append('name', user.name);
      fd.append('email', user.email);
      fd.append('rating', rating + ' / 5 stars');
      fd.append('category', category);
      fd.append('message', message);
      fd.append('_subject', `CramWiz Feedback from ${user.name} — ${rating}★`);
      fd.append('_replyto', user.email);
      await fetch('https://formspree.io/f/xpwzgdlr', { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
      // also store on server
      const fb = await SDB.get('feedback') || [];
      fb.push({ name: user.name, email: user.email, rating, category, message, date: new Date().toISOString() });
      await SDB.set('feedback', fb);
      setDone(true);
    } catch { setErr('Failed to send. Please try again.'); }
    setSending(false);
  };

  if (done) return (
    <div style={{ textAlign: 'center', padding: '48px 20px' }}>
      <div style={{ fontSize: '3rem', marginBottom: 12 }}>🙏</div>
      <h3 style={{ fontWeight: 800, marginBottom: 8 }}>Thank you, {user.name.split(' ')[0]}!</h3>
      <p style={{ color: 'var(--wd)', fontSize: '.875rem' }}>Your feedback has been sent to the CramWiz team. We read every single one.</p>
    </div>
  );

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Send Feedback</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 24 }}>Tell us what's working, what's not, or what you'd love to see next. Your feedback shapes CramWiz.</p>
      {err && <Alert type="error">{err}</Alert>}
      <div style={S.card}>
        <div style={{ marginBottom: 16 }}>
          <label style={S.label}>Rate your experience</label>
          <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
            {[1,2,3,4,5].map(s => (
              <button key={s} onClick={() => setRating(s)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.8rem', opacity: s <= rating ? 1 : 0.3, transition: 'var(--tr)', padding: 0 }}>★</button>
            ))}
          </div>
        </div>
        <Select label="Category" value={category} onChange={setCategory} options={[
          { value: 'general', label: 'General Feedback' },
          { value: 'ai_quality', label: 'AI Answer Quality' },
          { value: 'accuracy', label: 'Accuracy Issue' },
          { value: 'feature', label: 'Feature Request' },
          { value: 'bug', label: 'Bug Report' },
          { value: 'payment', label: 'Payment Issue' },
        ]} />
        <div style={{ marginBottom: 16 }}>
          <label style={S.label}>Your Message</label>
          <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Be as detailed as you want. What did CramWiz do well? What frustrated you? What should we build next?" style={{ ...S.input, minHeight: 100, resize: 'vertical' }} />
        </div>
        <Btn onClick={send} disabled={sending}>{sending ? 'Sending...' : 'Send Feedback'}</Btn>
      </div>
    </div>
  );
}

// Lazy-loads receipt image from server only when clicked
function ReceiptViewer({ subId }) {
  const [src, setSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  if (!subId) return null;
  if (src) return (
    <div style={{ marginBottom: 10 }}>
      <img src={src} onClick={() => window.open(src)} style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 'var(--rs)', border: '1px solid var(--wf)', cursor: 'pointer', display: 'block' }} alt="receipt" />
      <button onClick={() => setSrc(null)} style={{ background: 'none', border: 'none', color: 'var(--wd)', fontSize: '.72rem', cursor: 'pointer', marginTop: 4 }}>Hide receipt</button>
    </div>
  );
  return (
    <button onClick={async () => { setLoading(true); const img = await SDB.getReceipt(subId); setSrc(img); setLoading(false); }}
      style={{ background: 'rgba(26,108,255,.1)', border: '1px solid var(--bd)', borderRadius: 'var(--rs)', padding: '5px 12px', color: 'var(--bb)', fontSize: '.78rem', cursor: 'pointer', marginBottom: 10, fontFamily: 'var(--fn)' }}>
      {loading ? 'Loading…' : '🧾 View Receipt'}
    </button>
  );
}

function SectionAdmin() {
  const [count, setCount] = useState('50');
  const [genMsg, setGenMsg] = useState('');
  const [subs, setSubs] = useState([]);
  const [codes, setCodes] = useState({});
  const [payMsg, setPayMsg] = useState('');
  const [adminLoading, setAdminLoading] = useState(true);
  const [users, setUsers] = useState({});
  const [ambassadors, setAmbassadors] = useState({});
  const [feedback, setFeedback] = useState([]);
  const [announcement, setAnnouncement] = useState('');
  const [annMsg, setAnnMsg] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [customCodeEmail, setCustomCodeEmail] = useState('');
  const [customCodeMsg, setCustomCodeMsg] = useState('');

  // Load all data from server on mount
  useEffect(() => {
    (async () => {
      setAdminLoading(true);
      const [s, c, u, a, fb] = await Promise.all([
        SDB.get('subs'), SDB.get('codes'), SDB.get('users'),
        SDB.get('ambassadors'), SDB.get('feedback'),
      ]);
      setSubs(s || []);
      setCodes(c || {});
      setUsers(u || {});
      setAmbassadors(a || {});
      setFeedback(fb || []);
      setAdminLoading(false);
    })();
  }, []);

  const genCodes = async () => {
    const n = parseInt(count || 50);
    if (isNaN(n) || n < 1 || n > 500) { setGenMsg('Enter 1–500.'); return; }
    const c = { ...codes };
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    for (let i = 0; i < n; i++) {
      let code; do { code = 'CW-'; for (let j = 0; j < 8; j++) code += chars[Math.floor(Math.random() * chars.length)]; } while (c[code]);
      c[code] = { used: false, createdAt: new Date().toISOString() };
    }
    await SDB.set('codes', c); setCodes(c); setGenMsg(n + ' codes generated!'); setTimeout(() => setGenMsg(''), 3000);
  };

  const addCustomCode = async () => {
    if (!customCode.trim()) { setCustomCodeMsg('Enter a code.'); return; }
    const slug = customCode.trim().toUpperCase();
    const c = { ...codes };
    if (c[slug]) { setCustomCodeMsg('Code already exists.'); return; }
    if (customCodeEmail.trim()) {
      c[slug] = { used: false, createdAt: new Date().toISOString(), reservedFor: customCodeEmail.trim().toLowerCase() };
    } else {
      c[slug] = { used: false, createdAt: new Date().toISOString() };
    }
    await SDB.set('codes', c); setCodes(c);
    setCustomCodeMsg(`✅ Code ${slug} added${customCodeEmail ? ' for ' + customCodeEmail : ''}.`);
    setCustomCode(''); setCustomCodeEmail('');
    setTimeout(() => setCustomCodeMsg(''), 4000);
  };

  const confirmPay = async (id) => {
    const s = [...subs]; const sub = s.find(x => x.id === id); if (!sub) return;
    const c = { ...codes };
    const free = Object.entries(c).find(([, v]) => !v.used && (!v.reservedFor || v.reservedFor === sub.email));
    if (!free) { setPayMsg('No free codes! Generate more first.'); return; }
    const [code] = free;
    c[code].reservedFor = sub.email; c[code].used = true; c[code].usedBy = sub.email; c[code].usedAt = new Date().toISOString();
    sub.status = 'confirmed'; sub.codeAssigned = code; sub.confirmedAt = new Date().toISOString();
    await SDB.set('codes', c); setCodes(c);
    await SDB.set('subs', s); setSubs([...s]);
    const subject = encodeURIComponent('Your CramWiz Access Code');
    const body = encodeURIComponent(`Hi ${sub.name},\n\nYour payment has been confirmed. Welcome to CramWiz!\n\nYour access code: ${code}\n\nHow to get started:\n1. Go to cramwiz.vercel.app\n2. Click "Log In" → Register\n3. Use this exact email: ${sub.email}\n4. Enter your access code\n5. Create your password and you're in!\n\nSee you inside!\n— CramWiz Team`);
    window.open(`mailto:${sub.email}?subject=${subject}&body=${body}`);
    if (sub.phone) {
      const wpNum = sub.phone.replace(/\D/g,'').replace(/^0/,'234');
      const wpMsg = encodeURIComponent(`Hi ${sub.name}! 🎓\n\nYour CramWiz payment is confirmed!\n\nYour access code: *${code}*\n\nGo to cramwiz.vercel.app → Log In → Register\nUse your email: ${sub.email}\nPaste your code above.\n\nWelcome aboard! 🚀`);
      setTimeout(() => window.open(`https://wa.me/${wpNum}?text=${wpMsg}`), 1200);
    }
    setPayMsg('✅ Confirmed! Code assigned. Email + WhatsApp opened.'); setTimeout(() => setPayMsg(''), 4000);
  };

  const rejectPay = async (id) => {
    if (!confirm('Reject this submission?')) return;
    const s = [...subs]; const sub = s.find(x => x.id === id);
    if (sub) { sub.status = 'rejected'; await SDB.set('subs', s); setSubs([...s]); }
  };

  const toggleUser = async (email) => {
    const u = { ...users };
    if (!u[email]) return;
    u[email].disabled = !u[email].disabled;
    await SDB.set('users', u); setUsers({ ...u });
  };

  const revokeUser = async (email) => {
    if (!confirm(`Revoke access for ${email}?\nThis will:\n• Deactivate their account\n• Free up their access code\n\nThey cannot log in after this.`)) return;
    const u = { ...users };
    if (!u[email]) return;
    u[email].disabled = true;
    await SDB.set('users', u); setUsers({ ...u });
    const c = { ...codes };
    const codeEntry = Object.entries(c).find(([, v]) => v.usedBy === email);
    if (codeEntry) {
      const [code] = codeEntry;
      c[code].used = false; c[code].usedBy = null; c[code].usedAt = null; c[code].reservedFor = null;
      await SDB.set('codes', c); setCodes({ ...c });
    }
    alert(`✅ ${email} revoked. Their code is now available again.`);
  };

  const postAnnouncement = async () => {
    if (!announcement.trim()) return;
    await SDB.set('announcement', { text: announcement.trim(), date: new Date().toISOString() });
    setAnnMsg('✅ Announcement saved! Students will see it when they log in.'); setTimeout(() => setAnnMsg(''), 4000);
    setAnnouncement('');
  };

  const clearAnnouncement = async () => {
    await SDB.set('announcement', null);
    setAnnMsg('✅ Announcement cleared.'); setTimeout(() => setAnnMsg(''), 3000);
  };

  const exportCSV = (data, filename) => {
    if (!data.length) return;
    const keys = Object.keys(data[0]);
    const csv = [keys.join(','), ...data.map(r => keys.map(k => `"${(r[k]||'').toString().replace(/"/g,'""')}"`).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename; a.click();
  };

  const cEntries = Object.entries(codes);
  const used = cEntries.filter(([,v]) => v.used).length;
  const [adminTab, setAdminTab] = useState('payments');
  const [codeTab, setCodeTab] = useState('available');

  const availCodes = cEntries.filter(([,v]) => !v.used);
  const usedCodes = cEntries.filter(([,v]) => v.used);

  const tabBtn = (id, label, count2) => (
    <button onClick={() => setAdminTab(id)} style={{ padding: '9px 14px', border: 'none', background: 'transparent', color: adminTab === id ? 'var(--bb)' : 'var(--wd)', fontFamily: 'var(--fn)', fontWeight: 600, fontSize: '.78rem', borderBottom: adminTab === id ? '2px solid var(--bb)' : '2px solid transparent', cursor: 'pointer', whiteSpace: 'nowrap', marginBottom: -1 }}>
      {label}{count2 !== undefined ? ` (${count2})` : ''}
    </button>
  );

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 3 }}>Admin Panel</h2>
      <p style={{ fontSize: '.82rem', color: 'var(--wd)', marginBottom: 16 }}>Total control — payments, users, codes, ambassadors, feedback.</p>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        <Btn variant="outline" onClick={async () => {
          if (!confirm('Force reseed Redis with all 2000 codes? Will NOT overwrite used codes.')) return;
          const existing = await SDB.get('codes') || {};
          const merged = { ...SEED_CODES, ...existing };
          await SDB.set('codes', merged); await SDB.set('seeded', true);
          setCodes(merged); alert('✅ Reseeded! ' + Object.keys(merged).length + ' codes in Redis.');
        }}>🔄 Force Reseed</Btn>
        <Btn variant="outline" onClick={async () => {
          setAdminLoading(true);
          const [s, c, u, a, fb] = await Promise.all([SDB.get('subs'), SDB.get('codes'), SDB.get('users'), SDB.get('ambassadors'), SDB.get('feedback')]);
          setSubs(s||[]); setCodes(c||{}); setUsers(u||{}); setAmbassadors(a||{}); setFeedback(fb||[]);
          setAdminLoading(false); alert('✅ Refreshed from server');
        }}>↻ Refresh</Btn>
        <Btn variant="outline" onClick={() => exportCSV(subs.map(s => ({ id:s.id, name:s.name, email:s.email, phone:s.phone||'', status:s.status, code:s.codeAssigned||'', ref:s.ref||'', ambassador:s.ambName||'', submitted:s.submittedAt })), 'cramwiz_payments.csv')}>⬇ Export Payments CSV</Btn>
        <Btn variant="outline" onClick={() => exportCSV(Object.entries(users).filter(([e])=>e!=='admin@cramwiz.com').map(([email,u])=>({email,name:u.name,dept:u.dept||'',uni:u.uni||'',status:u.disabled?'disabled':'active',code:Object.entries(codes).find(([,v])=>v.usedBy===email)?.[0]||''})), 'cramwiz_users.csv')}>⬇ Export Users CSV</Btn>
      </div>
      {adminLoading && <Loader text="Loading data from server…" />}
      {!adminLoading && <div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 16 }} className="grid-2">
        {[
          ['Total Codes', cEntries.length, 'blue'],
          ['Used Codes', used, 'red'],
          ['Available', cEntries.length - used, 'green'],
          ['Pending Pays', subs.filter(s=>s.status==='pending').length, 'gold'],
          ['Total Users', Object.keys(users).filter(e=>e!=='admin@cramwiz.com').length, 'blue'],
          ['Active Users', Object.values(users).filter(u=>!u.disabled&&u.name!=='Admin').length, 'green'],
          ['Ambassadors', Object.keys(ambassadors).length, 'gold'],
          ['Feedbacks', feedback.length, 'blue'],
        ].map(([l,v,c]) => (
          <div key={l} style={{ background:'var(--b3)', border:'1px solid var(--wf)', borderRadius:'var(--r)', padding:'10px 12px', textAlign:'center' }}>
            <div style={{ fontSize:'.6rem', textTransform:'uppercase', letterSpacing:1, color:'var(--wd)', fontFamily:'var(--fm)', marginBottom:3 }}>{l}</div>
            <div style={{ fontWeight:800, fontSize:'1.4rem', color:`var(--${c})` }}>{v}</div>
          </div>
        ))}
      </div>

      {/* Tab bar */}
      <div style={{ display:'flex', borderBottom:'1px solid var(--wf)', marginBottom:18, overflowX:'auto' }}>
        {tabBtn('payments', 'Payments', subs.length)}
        {tabBtn('codes', 'Codes')}
        {tabBtn('users', 'Users', Object.keys(users).filter(e=>e!=='admin@cramwiz.com').length)}
        {tabBtn('ambassadors', 'Ambassadors', Object.keys(ambassadors).length)}
        {tabBtn('feedback', 'Feedback', feedback.length)}
        {tabBtn('announce', 'Announce')}
      </div>

      {/* PAYMENTS */}
      {adminTab === 'payments' && (
        <div>
          {payMsg && <Alert type="success">{payMsg}</Alert>}
          <p style={{ fontSize:'.72rem', color:'var(--wd)', marginBottom:12 }}>{subs.length} total · {subs.filter(s=>s.status==='confirmed').length} confirmed · {subs.filter(s=>s.status==='pending').length} pending · {subs.filter(s=>s.status==='rejected').length} rejected</p>
          {subs.length === 0 ? <p style={{ color:'var(--wd)', fontSize:'.875rem' }}>No submissions yet.</p>
            : [...subs].reverse().map(s => (
            <div key={s.id} style={{ ...S.card, marginBottom:12, borderColor:s.status==='confirmed'?'var(--green)':s.status==='rejected'?'var(--red)':'var(--bd)' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                <div>
                  <div style={{ fontWeight:700 }}>{s.name}</div>
                  <div style={{ fontSize:'.75rem', color:'var(--wd)', fontFamily:'var(--fm)', marginTop:3 }}>{s.email}{s.phone?' · '+s.phone:''}</div>
                  {s.dept && <div style={{ fontSize:'.72rem', color:'var(--wd)', marginTop:2 }}>{s.dept}{s.uni?' · '+s.uni:''}</div>}
                </div>
                <Badge color={s.status==='confirmed'?'green':s.status==='rejected'?'red':'blue'}>{s.status.toUpperCase()}</Badge>
              </div>
              <div style={{ fontSize:'.72rem', color:'var(--wd)', marginBottom:6 }}>Submitted: {new Date(s.submittedAt).toLocaleString()}</div>
              {s.ref && (
                <div style={{ fontSize:'.72rem', marginBottom:8, padding:'6px 10px', background:'rgba(245,166,35,.08)', borderRadius:'var(--rs)', border:'1px solid rgba(245,166,35,.2)' }}>
                  <span style={{ color:'var(--gold)', fontWeight:700 }}>Ref: {s.ref}</span>
                  {s.ambName && <span style={{ color:'var(--wd)' }}> · Ambassador: <strong style={{ color:'var(--white)' }}>{s.ambName}</strong></span>}
                  {s.ambBank && <div style={{ marginTop:3, color:'var(--wd)' }}>Pay ₦1,000 to: <strong style={{ color:'var(--white)' }}>{s.ambBank}</strong></div>}
                </div>
              )}
              <ReceiptViewer subId={s.id} />
              {s.status==='pending' ? (
                <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                  <Btn onClick={() => confirmPay(s.id)}>✅ Confirm & Send Code</Btn>
                  <Btn variant="danger" onClick={() => rejectPay(s.id)}>✕ Reject</Btn>
                </div>
              ) : s.status==='confirmed' ? (
                <p style={{ fontSize:'.72rem', color:'var(--green)' }}>Code: <span style={{ fontFamily:'var(--fm)' }}>{s.codeAssigned||'—'}</span> · Confirmed: {s.confirmedAt?new Date(s.confirmedAt).toLocaleDateString():''}</p>
              ) : (
                <p style={{ fontSize:'.72rem', color:'var(--red)' }}>Rejected</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* CODES */}
      {adminTab === 'codes' && (
        <div>
          <div style={{ ...S.card, marginBottom:14 }}>
            <div style={{ fontSize:'.72rem', textTransform:'uppercase', letterSpacing:1, color:'var(--wd)', fontFamily:'var(--fm)', marginBottom:10 }}>Generate New Codes</div>
            {genMsg && <Alert type="success">{genMsg}</Alert>}
            <div style={{ display:'flex', gap:10, alignItems:'flex-end', flexWrap:'wrap' }}>
              <div style={{ flex:1, minWidth:120 }}><Input label="Count (max 500)" type="number" value={count} onChange={setCount} placeholder="50" /></div>
              <Btn onClick={genCodes} style={{ marginBottom:16 }}>Generate</Btn>
            </div>
          </div>
          <div style={{ ...S.card, marginBottom:14 }}>
            <div style={{ fontSize:'.72rem', textTransform:'uppercase', letterSpacing:1, color:'var(--wd)', fontFamily:'var(--fm)', marginBottom:10 }}>Add Custom Code</div>
            {customCodeMsg && <Alert type="success">{customCodeMsg}</Alert>}
            <div style={{ display:'flex', gap:10, flexWrap:'wrap', alignItems:'flex-end' }}>
              <div style={{ flex:1, minWidth:140 }}><Input label="Code (e.g. CW-SPECIAL1)" value={customCode} onChange={setCustomCode} placeholder="CW-MYCODE" style={{ fontFamily:'var(--fm)', letterSpacing:1 }} /></div>
              <div style={{ flex:1, minWidth:200 }}><Input label="Reserve for email (optional)" value={customCodeEmail} onChange={setCustomCodeEmail} placeholder="student@email.com" /></div>
              <Btn onClick={addCustomCode} style={{ marginBottom:16 }}>Add Code</Btn>
            </div>
          </div>
          <div style={{ display:'flex', borderBottom:'1px solid var(--wf)', marginBottom:12 }}>
            {[['available',`Available (${availCodes.length})`],['used',`Used (${usedCodes.length})`]].map(([id,label]) => (
              <button key={id} onClick={() => setCodeTab(id)} style={{ padding:'8px 14px', border:'none', background:'transparent', color:codeTab===id?'var(--bb)':'var(--wd)', fontFamily:'var(--fn)', fontWeight:600, fontSize:'.78rem', borderBottom:codeTab===id?'2px solid var(--bb)':'2px solid transparent', cursor:'pointer', marginBottom:-1 }}>{label}</button>
            ))}
          </div>
          <div style={{ maxHeight:400, overflowY:'auto' }}>
            {codeTab==='available'
              ? availCodes.length===0 ? <p style={{ color:'var(--wd)', fontSize:'.875rem' }}>No available codes.</p>
              : availCodes.map(([code,v]) => (
                <div key={code} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'7px 10px', background:'var(--b3)', borderRadius:'var(--rs)', marginBottom:5 }}>
                  <span style={{ fontFamily:'var(--fm)', fontWeight:700, fontSize:'.875rem', letterSpacing:1 }}>{code}</span>
                  <div style={{ display:'flex', gap:8, alignItems:'center' }}>
                    {v.reservedFor && <span style={{ fontSize:'.7rem', color:'var(--gold)' }}>Reserved: {v.reservedFor}</span>}
                    <Badge color="green">Available</Badge>
                  </div>
                </div>
              ))
              : usedCodes.length===0 ? <p style={{ color:'var(--wd)', fontSize:'.875rem' }}>No codes used yet.</p>
              : usedCodes.map(([code,v]) => (
                <div key={code} style={{ padding:'8px 10px', background:'var(--b3)', borderRadius:'var(--rs)', marginBottom:5 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontFamily:'var(--fm)', fontWeight:700, fontSize:'.875rem', letterSpacing:1 }}>{code}</span>
                    <Badge color="red">Used</Badge>
                  </div>
                  {v.usedBy && <div style={{ fontSize:'.72rem', color:'var(--wd)', marginTop:3 }}>By: {v.usedBy} · {v.usedAt?new Date(v.usedAt).toLocaleDateString():''}</div>}
                </div>
              ))
            }
          </div>
        </div>
      )}

      {/* USERS */}
      {adminTab === 'users' && (
        <div>
          {Object.entries(users).filter(([e])=>e!=='admin@cramwiz.com').length===0
            ? <p style={{ color:'var(--wd)', fontSize:'.875rem' }}>No registered users yet.</p>
            : Object.entries(users).filter(([e])=>e!=='admin@cramwiz.com').sort((a,b)=>a[0].localeCompare(b[0])).map(([email,u]) => {
              const userCode = Object.entries(codes).find(([,v])=>v.usedBy===email)?.[0];
              return (
              <div key={email} style={{ ...S.card, marginBottom:10, opacity:u.disabled?0.55:1 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
                  <div>
                    <div style={{ fontWeight:700 }}>{u.name}</div>
                    <div style={{ fontSize:'.75rem', color:'var(--wd)', fontFamily:'var(--fm)', marginTop:2 }}>{email}</div>
                    {(u.dept||u.uni) && <div style={{ fontSize:'.72rem', color:'var(--wd)', marginTop:2 }}>{[u.dept,u.uni].filter(Boolean).join(' · ')}</div>}
                    {userCode && <div style={{ fontSize:'.72rem', color:'var(--bb)', marginTop:2, fontFamily:'var(--fm)' }}>Code: {userCode}</div>}
                    <div style={{ display:'flex', gap:6, marginTop:6, flexWrap:'wrap' }}>
                      {u.isFy && <Badge color="gold">Final Year</Badge>}
                      {u.disabled && <Badge color="red">Deactivated</Badge>}
                    </div>
                  </div>
                  <div style={{ display:'flex', gap:6, flexDirection:'column', alignItems:'flex-end' }}>
                    <Btn variant={u.disabled?'outline':'danger'} onClick={()=>toggleUser(email)} style={{ fontSize:'.75rem', padding:'5px 10px' }}>
                      {u.disabled?'Activate':'Deactivate'}
                    </Btn>
                    {!u.disabled && (
                      <Btn variant="danger" onClick={()=>revokeUser(email)} style={{ fontSize:'.75rem', padding:'5px 10px', background:'rgba(255,77,109,.2)' }}>
                        🚫 Revoke
                      </Btn>
                    )}
                  </div>
                </div>
              </div>
              );
            })
          }
        </div>
      )}

      {/* AMBASSADORS */}
      {adminTab === 'ambassadors' && (
        <div>
          {Object.keys(ambassadors).length===0
            ? <p style={{ color:'var(--wd)', fontSize:'.875rem' }}>No ambassadors yet.</p>
            : Object.values(ambassadors).map((amb,i) => (
              <div key={i} style={{ ...S.card, marginBottom:12 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                  <div>
                    <div style={{ fontWeight:700 }}>{amb.name}</div>
                    <div style={{ fontSize:'.75rem', color:'var(--wd)', fontFamily:'var(--fm)', marginTop:2 }}>{amb.email}</div>
                    <div style={{ fontSize:'.75rem', color:'var(--bb)', fontFamily:'var(--fm)', marginTop:2 }}>Code: {amb.code}</div>
                  </div>
                  <Badge color="gold">Ambassador</Badge>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:10 }} className="grid-2">
                  <div style={{ background:'var(--b4)', borderRadius:'var(--rs)', padding:'8px 12px', textAlign:'center' }}>
                    <div style={{ fontSize:'.65rem', color:'var(--wd)', textTransform:'uppercase', marginBottom:3 }}>Referrals</div>
                    <div style={{ fontWeight:800, fontSize:'1.3rem', color:'var(--bb)' }}>{amb.referrals||0}</div>
                  </div>
                  <div style={{ background:'var(--b4)', borderRadius:'var(--rs)', padding:'8px 12px', textAlign:'center' }}>
                    <div style={{ fontSize:'.65rem', color:'var(--wd)', textTransform:'uppercase', marginBottom:3 }}>Earned</div>
                    <div style={{ fontWeight:800, fontSize:'1.3rem', color:'var(--green)' }}>₦{(amb.earned||0).toLocaleString()}</div>
                  </div>
                </div>
                {amb.bankName && (
                  <div style={{ padding:'8px 12px', background:'rgba(245,166,35,.08)', borderRadius:'var(--rs)', fontSize:'.78rem' }}>
                    <strong style={{ color:'var(--white)' }}>Pay to: </strong><span style={{ color:'var(--wd)' }}>{amb.bankAcctName} · {amb.bankAcct} · {amb.bankName}</span>
                  </div>
                )}
                {amb.signups?.length>0 && (
                  <div style={{ marginTop:10 }}>
                    <div style={{ fontSize:'.68rem', color:'var(--wd)', textTransform:'uppercase', letterSpacing:1, marginBottom:6 }}>Referred Students</div>
                    {amb.signups.slice(0,5).map((s,si) => (
                      <div key={si} style={{ display:'flex', justifyContent:'space-between', padding:'5px 0', borderBottom:'1px solid var(--wf)', fontSize:'.78rem' }}>
                        <span>{s.name}</span><span style={{ color:'var(--wd)' }}>{new Date(s.date).toLocaleDateString()}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          }
        </div>
      )}

      {/* FEEDBACK */}
      {adminTab === 'feedback' && (
        <div>
          {feedback.length===0
            ? <p style={{ color:'var(--wd)', fontSize:'.875rem' }}>No feedback yet.</p>
            : [...feedback].reverse().map((fb,i) => (
              <div key={i} style={{ ...S.card, marginBottom:10 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                  <div>
                    <div style={{ fontWeight:700 }}>{fb.name}</div>
                    <div style={{ fontSize:'.75rem', color:'var(--wd)', marginTop:2 }}>{fb.email}</div>
                  </div>
                  <div style={{ display:'flex', gap:6, alignItems:'center' }}>
                    <span style={{ color:'var(--gold)', fontSize:'1rem' }}>{'★'.repeat(fb.rating||0)}{'☆'.repeat(5-(fb.rating||0))}</span>
                    <Badge color="blue">{fb.category}</Badge>
                  </div>
                </div>
                <p style={{ fontSize:'.875rem', color:'var(--wd)', lineHeight:1.7 }}>{fb.message}</p>
                <div style={{ fontSize:'.72rem', color:'var(--wd)', marginTop:6 }}>{fb.date?new Date(fb.date).toLocaleString():''}</div>
              </div>
            ))
          }
        </div>
      )}

      {/* ANNOUNCE */}
      {adminTab === 'announce' && (
        <div>
          <div style={{ ...S.card, marginBottom:14 }}>
            <div style={{ fontSize:'.72rem', textTransform:'uppercase', letterSpacing:1, color:'var(--wd)', fontFamily:'var(--fm)', marginBottom:10 }}>Post Announcement to All Users</div>
            <p style={{ fontSize:'.82rem', color:'var(--wd)', marginBottom:14, lineHeight:1.7 }}>This message will appear as a banner to every logged-in student. Use it for maintenance notices, new features, pricing changes, or important updates.</p>
            {annMsg && <Alert type="success">{annMsg}</Alert>}
            <textarea value={announcement} onChange={e=>setAnnouncement(e.target.value)}
              placeholder="e.g. 🎉 CramWiz now supports voice playback on all answers! Update your account to try it..."
              style={{ ...S.input, minHeight:80, resize:'vertical', marginBottom:12 }} />
            <div style={{ display:'flex', gap:8 }}>
              <Btn onClick={postAnnouncement} disabled={!announcement.trim()}>📢 Post Announcement</Btn>
              <Btn variant="danger" onClick={clearAnnouncement}>✕ Clear Announcement</Btn>
            </div>
          </div>
          <div style={{ ...S.card }}>
            <div style={{ fontSize:'.72rem', textTransform:'uppercase', letterSpacing:1, color:'var(--wd)', fontFamily:'var(--fm)', marginBottom:10 }}>Admin Login Details</div>
            <p style={{ fontSize:'.875rem', color:'var(--wd)' }}>Email: <span style={{ fontFamily:'var(--fm)', color:'var(--bb)' }}>admin@cramwiz.com</span></p>
            <p style={{ fontSize:'.875rem', color:'var(--wd)', marginTop:6 }}>Default Password: <span style={{ fontFamily:'var(--fm)', color:'var(--bb)' }}>admin2024</span> (change this in My Account)</p>
          </div>
        </div>
      )}

      </div>}
    </div>
  );
}

// ============================================================
// MAIN APP
// ============================================================
export default function CramWiz() {
  const [page, setPage] = useState('landing');
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      // Check referral param immediately (no server needed)
      const params = new URLSearchParams(window.location.search);
      const ref = params.get('ref');
      if (ref) sessionStorage.setItem('cwref', ref);

      // Restore session from localStorage (instant)
      const u = DB.get('user');
      if (u) { setUser(u); setPage('dashboard'); }

      // Seed Redis — always check server directly, no localStorage caching
      try {
        const seeded = await SDB.get('seeded');
        if (!seeded) {
          // First ever deploy — push all 2000 codes to Redis
          await SDB.set('codes', SEED_CODES);
          await SDB.set('seeded', true);
        }
        // Always ensure admin account exists
        const users = await SDB.get('users') || {};
        if (!users['admin@cramwiz.com']) {
          users['admin@cramwiz.com'] = { name: 'Admin', pw: hash('admin2024'), isAdmin: true, isFy: false, dept: '', uni: '' };
          await SDB.set('users', users);
        }
      } catch(e) { console.error('Init seed error:', e); }

      setReady(true);
    })();
  }, []);

  // Load PDF.js
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.pdfjsLib) return;
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    script.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    };
    document.head.appendChild(script);
  }, []);

  const navigate = useCallback((p) => { setPage(p); window.scrollTo(0, 0); }, []);
  const login = useCallback((u) => { setUser(u); setPage('dashboard'); }, []);
  const logout = useCallback(() => { DB.del('user'); setUser(null); setPage('landing'); }, []);

  if (!ready) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--black)' }}>
      <div style={{ textAlign: 'center' }}>
        <img src="/logo.png" alt="CramWiz" style={{ height: 60, marginBottom: 20 }} />
        <div style={{ width: 36, height: 36, border: '3px solid var(--b4)', borderTopColor: 'var(--bb)', borderRadius: '50%', animation: 'spin .75s linear infinite', margin: '0 auto' }} />
      </div>
    </div>
  );

  return (
    <>
      <Head><title>CramWiz — The AI Study Platform</title></Head>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes bounce { 0%,80%,100%{transform:scale(0);opacity:.4} 40%{transform:scale(1);opacity:1} }
        @media(max-width:900px){
          .dashboard-grid { grid-template-columns: 1fr !important; }
          .sidebar { display: none !important; }
          .main-content { padding: 20px 16px !important; padding-bottom: 90px !important; }
          .mobile-nav { display: block !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
        }
        @media(max-width:600px){
          .hero-title { font-size: 2rem !important; letter-spacing: -1px !important; }
        }
        a { color: var(--bb); }
        select option { background: var(--b3); color: var(--white); }
      `}</style>
      {page === 'landing' && <Landing onNavigate={navigate} />}
      {page === 'about' && <About onNavigate={navigate} />}
      {page === 'terms' && <Terms onNavigate={navigate} />}
      {page === 'subscribe' && <Subscribe onNavigate={navigate} />}
      {page === 'submitted' && <Submitted onNavigate={navigate} />}
      {page === 'login' && <Login onNavigate={navigate} onLogin={login} />}
      {page === 'forgot' && <Forgot onNavigate={navigate} />}
      {page === 'register' && <Register onNavigate={navigate} onLogin={login} />}
      {page === 'dashboard' && user && <Dashboard user={user} onLogout={logout} onNavigate={navigate} />}
      {page === 'dashboard' && !user && (() => { navigate('login'); return null; })()}
    </>
  );
}

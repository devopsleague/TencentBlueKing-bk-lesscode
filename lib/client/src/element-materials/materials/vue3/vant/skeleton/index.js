/**
 * Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 * Copyright (C) 2017-2019 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

export default {
    name: 'van-skeleton',
    type: 'van-skeleton',
    // bk-drag-custom-comp-default
    icon: 'bk-drag-skeleton',
    displayName: '骨架屏',
    group: '数据',
    document: 'https://vant-contrib.gitee.io/vant/#/zh-CN/skeleton',
    events: [],
    styles: [],
    renderStyles: {
    },
    groups: [
        { label: '标题', value: 'title' },
        { label: '头像', value: 'avatar' },
        { label: '布局', value: 'layout' },
        { label: '样式', value: 'style' },
        { label: '其他', value: 'other' }
    ],
    props: {
        'row': {
            type: ['string', 'number'],
            val: '3',
            displayName: '段落占位图行数',
            tips: '段落占位图行数',
            belongGroup: 'layout'
        },
        'row-width': {
            type: ['string', 'number', 'array'],
            val: '100%',
            displayName: '段落占位图宽度',
            tips: '段落占位图宽度，可传数组来设置每一行的宽度',
            belongGroup: 'layout'
        },
        'title': {
            type: 'boolean',
            val: true,
            displayName: '是否有占位标题',
            tips: '是否显示标题占位图',
            belongGroup: 'title'
        },
        'avatar': {
            type: 'boolean',
            val: true,
            displayName: '是否有占位头像',
            tips: '是否显示头像占位图',
            belongGroup: 'avatar'
        },
        'loading': {
            type: 'boolean',
            val: true,
            displayName: '是否有骨架屏',
            tips: '是否显示骨架屏，传 false 时会展示子组件内容',
            belongGroup: 'other'
        },
        'animate': {
            type: 'boolean',
            val: true,
            displayName: '是否开启动画',
            tips: '是否开启动画',
            belongGroup: 'other'
        },
        'round': {
            type: 'boolean',
            val: false,
            displayName: '是否有圆角风格',
            tips: 'boolean',
            belongGroup: 'style'
        },
        'title-width': {
            type: ['string', 'number'],
            val: '40%',
            displayName: '标题占位图宽度',
            tips: '标题占位图宽度',
            belongGroup: 'title'
        },
        'avatar-size': {
            type: ['string', 'number'],
            val: '32px',
            displayName: '头像占位图大小',
            tips: '头像占位图大小',
            belongGroup: 'avatar'
        },
        'avatar-shape': {
            type: 'string',
            val: 'round',
            options: ['square', 'round'],
            displayName: '头像占位图形状',
            tips: '头像占位图形状，可选值为square',
            belongGroup: 'avatar'
        }
    }
}

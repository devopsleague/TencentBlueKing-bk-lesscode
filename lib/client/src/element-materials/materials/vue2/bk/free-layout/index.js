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
    name: 'free-layout',
    // dom 标签
    type: 'free-layout',
    displayName: '自由布局',
    group: '布局',
    icon: 'bk-drag-ziyoubuju',
    order: 5,
    styles: ['position', 'size', 'padding', 'margin', 'opacity', 'pointer', 'background', 'font', 'border'],
    renderStyles: {
        height: '500px'
    },
    props: {
    },
    slots: {
        default: []
    },
    directives: [
        {
            type: 'v-bkloading'
        }
    ]
}

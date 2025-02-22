<template>
    <div class="node-detail-panel">
        <div class="header-wrapper">
            <bk-button size="small" @click="handleClose">{{ $t('返回') }}</bk-button>
            <h3 class="config-title">{{ $t('{n}配置',{ n: nodeTypeName })}}</h3>
        </div>
        <div class="config-content-wrapper">
            <component
                ref="nodeFormRef"
                :is="nodeConfigCompMap[detail.data.type]"
                :tpl-id="tplId"
                :tpl-name="tplName"
                :nodes="nodes"
                :edges="edges"
                :detail="detail.data"
                @change="handleChange"
                @update="handleUpdate" />
            <div class="save-btn">
                <bk-button theme="primary" @click="handleSave">{{ $t('保存') }}</bk-button>
            </div>
        </div>
    </div>
</template>
<script>
    import { defineComponent, ref, computed, onMounted, getCurrentInstance } from 'vue'
    import { NODES } from '../render-graph/constants'
    import { useStore } from '@/store'
    import ManualNode from './manual-node/index.vue'
    import DataProcessingNode from './data-processing-node/index.vue'

    export default defineComponent({
        name: 'NodeDetailPanel',
        components: {
            ManualNode,
            DataProcessingNode
        },
        props: {
            tplId: Number,
            tplName: String,
            nodes: {
                type: Array,
                default: () => []
            },
            edges: {
                type: Array,
                default: () => []
            },
            detail: {
                type: Object,
                default: () => ({})
            }
        },
        setup (props, { emit }) {
            const instance = getCurrentInstance()

            const store = useStore()

            const nodeConfigCompMap = {
                Manual: 'ManualNode',
                DataProcessing: 'DataProcessingNode'
            }

            const detailCopy = ref({})
            const nodeFormRef = ref(null)

            const nodeTypeName = computed(() => {
                if (props.detail.data.type) {
                    const nodeSetting = NODES.find(item => item.type === props.detail.data.type)
                    return nodeSetting ? nodeSetting.name : ''
                }

                return ''
            })

            onMounted(() => {
                detailCopy.value = JSON.parse(JSON.stringify(props.detail.data))
            })

            const handleClose = () => {
                emit('close')
            }

            const handleChange = (val) => {
                detailCopy.value = val
            }

            const handleUpdate = (val) => {
                handleChange(val)
                emit('update', val)
            }

            const handleSave = async () => {
                await nodeFormRef.value.validate()
                detailCopy.value.isDraft = false
                await store.dispatch('flow/tpl/updateNode', { id: props.tplId, data: detailCopy.value })
                emit('update', detailCopy.value)
                instance.proxy.$bkMessage({
                    theme: 'success',
                    message: window.i18n.t('保存成功')
                })
            }

            return {
                nodeConfigCompMap,
                nodeTypeName,
                nodeFormRef,
                handleClose,
                handleChange,
                handleSave,
                handleUpdate
            }
        }
    })
</script>
<style lang="postcss" scoped>
    .node-detail-panel {
        width: 100%;
        height: 100%;
        background: #fafbfd;
    }
    .header-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 48px;
        height: 48px;
        background: #eaebf0;
        .config-title {
            margin-left: 16px;
            font-size: 14px;
            font-weight: bold;
            color: #313238;
        }
    }
    .config-content-wrapper {
        padding: 24px;
        height: calc(100% - 48px);
        overflow: auto;
    }
    .save-btn {
        margin-top: 24px;
        padding-left: 130px;
        .bk-button {
            min-width: 88px;
        }
    }
</style>

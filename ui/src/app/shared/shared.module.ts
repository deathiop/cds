import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NguiAutoCompleteModule } from '@sgu/auto-complete';
import { TranslateModule } from '@ngx-translate/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AuthenticationGuard } from 'app/guard/authentication.guard';
import { FeatureGuard } from 'app/guard/feature.guard';
import { NoAuthenticationGuard } from 'app/guard/no-authentication.guard';
import { AsCodeEventComponent } from 'app/shared/ascode/events/ascode.event.component';
import { AsCodeSaveFormComponent } from 'app/shared/ascode/save-form/ascode.save-form.component';
import { AsCodeSaveModalComponent } from 'app/shared/ascode/save-modal/ascode.save-modal.component';
import { ConditionsComponent } from 'app/shared/conditions/conditions.component';
import { AutoFocusInputComponent } from 'app/shared/input/autofocus/autofocus.input.component';
import { CallbackPipe } from 'app/shared/pipes/callback.pipe';
import { WorkflowHookMenuEditComponent } from 'app/shared/workflow/menu/edit-hook/menu.edit.hook.component';
import { WorkflowWizardNodeConditionComponent } from 'app/shared/workflow/wizard/conditions/wizard.conditions.component';
import { WorkflowWizardOutgoingHookComponent } from 'app/shared/workflow/wizard/outgoinghook/wizard.outgoinghook.component';
import { WorkflowRunJobVariableComponent } from 'app/views/workflow/run/node/pipeline/variables/job.variables.component';
import { WorkflowRunJobComponent } from 'app/views/workflow/run/node/pipeline/workflow-run-job/workflow-run-job.component';
import { CodemirrorModule } from 'ng2-codemirror-typescript/Codemirror';
import { DragulaModule } from 'ng2-dragula-sgu';
import { ClipboardModule } from 'ngx-clipboard';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MarkdownModule } from 'ngx-markdown';
import { MomentModule } from 'ngx-moment';
import { ActionComponent } from './action/action.component';
import { ActionStepFormComponent } from './action/step/form/step.form.component';
import { ActionStepComponent } from './action/step/step.component';
import { AuditListComponent } from './audit/list/audit.list.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { UploadButtonComponent } from './button/upload/upload.button.component';
import { ChartComponentComponent } from './chart/chart.component';
import { CommitListComponent } from './commit/commit.list.component';
import { DiffItemComponent } from './diff/item/diff.item.component';
import { DiffListComponent } from './diff/list/diff.list.component';
import { FavoriteCardsComponent } from './favorite-cards/favorite-cards.component';
import { KeysFormComponent } from './keys/form/keys.form.component';
import { KeysListComponent } from './keys/list/keys.list.component';
import { LabelsEditComponent } from './labels/edit/labels.edit.component';
import { ParameterFormComponent } from './parameter/form/parameter.form';
import { ParameterListComponent } from './parameter/list/parameter.component';
import { ParameterValueComponent } from './parameter/value/parameter.value.component';
import { PermissionFormComponent } from './permission/form/permission.form.component';
import { WorkflowPermissionFormComponent } from './permission/form/workflow-permission.form.component';
import { PermissionListComponent } from './permission/list/permission.list.component';
import { PermissionService } from './permission/permission.service';
import { AnsiPipe } from './pipes/ansi.pipe';
import { CutPipe } from './pipes/cut.pipe';
import { DurationMsPipe } from './pipes/duration.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { ForMapPipe } from './pipes/map.pipe';
import { NgForNumber } from './pipes/ngfor.number.pipe';
import { SafeHtmlPipe } from './pipes/safeHtml.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ProjectBreadcrumbComponent } from './project-breadcrumb/project-breadcrumb.component';
import { RepoManagerFormComponent } from './repomanager/from/repomanager.form.component';
import { RequirementsFormComponent } from './requirements/form/requirements.form.component';
import { RequirementsListComponent } from './requirements/list/requirements.list.component';
import { ScrollviewComponent } from './scrollview/scrollview.component';
import { SharedService } from './shared.service';
import { StatusIconComponent } from './status/status.component';
import { DataTableComponent, SelectorPipe, SelectPipe } from './table/data-table.component';
import { TabComponent } from './tabs/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToastService } from './toast/ToastService';
import { UsageApplicationsComponent } from './usage/applications/usage.applications.component';
import { UsageEnvironmentsComponent } from './usage/environments/usage.environments.component';
import { UsagePipelinesComponent } from './usage/pipelines/usage.pipelines.component';
import { UsageComponent } from './usage/usage.component';
import { UsageWorkflowsComponent } from './usage/workflows/usage.workflows.component';
import { VariableAuditComponent } from './variable/audit/audit.component';
import { VariableDiffComponent } from './variable/diff/variable.diff.component';
import { VariableFormComponent } from './variable/form/variable.form';
import { VariableComponent } from './variable/list/variable.component';
import { VariableValueComponent } from './variable/value/variable.value.component';
import { VCSStrategyComponent } from './vcs/vcs.strategy.component';
import { VulnerabilitiesListComponent } from './vulnerability/list/vulnerability.list.component';
import { VulnerabilitiesComponent } from './vulnerability/vulnerabilities.component';
import { WorkflowTemplateApplyFormComponent } from './workflow-template/apply-form/workflow-template.apply-form.component';
import { WorkflowTemplateApplyModalComponent } from './workflow-template/apply-modal/workflow-template.apply-modal.component';
import { WorkflowTemplateBulkModalComponent } from './workflow-template/bulk-modal/workflow-template.bulk-modal.component';
import { WorkflowTemplateParamFormComponent } from './workflow-template/param-form/workflow-template.param-form.component';
import { WorkflowWNodeMenuEditComponent } from './workflow/menu/edit-node/menu.edit.node.component';
import { WorkflowDeleteNodeComponent } from './workflow/modal/delete/workflow.node.delete.component';
import { WorkflowHookModalComponent } from './workflow/modal/hook-add/hook.modal.component';
import { WorkflowTriggerComponent } from './workflow/modal/node-add/workflow.trigger.component';
import { WorkflowNodeEditModalComponent } from './workflow/modal/node-edit/node.edit.modal.component';
import { WorkflowNodeHookDetailsComponent } from './workflow/node/hook/details/hook.details.component';
import { WorkflowNodeRunParamComponent } from './workflow/node/run/node.run.param.component';
import { WorkflowSidebarRunListComponent } from './workflow/sidebar/run-list/workflow.sidebar.run.component';
import { WorkflowWizardNodeContextComponent } from './workflow/wizard/context/wizard.context.component';
import { WorkflowNodeHookFormComponent } from './workflow/wizard/hook/hook.form.component';
import { WorkflowWizardNodeInputComponent } from './workflow/wizard/input/wizard.input.component';
import { WorkflowNodeAddWizardComponent } from './workflow/wizard/node-add/node.wizard.component';
import { WorkflowWNodeForkComponent } from './workflow/wnode/fork/node.fork.component';
import { WorkflowNodeHookComponent } from './workflow/wnode/hook/hook.component';
import { WorkflowWNodeJoinComponent } from './workflow/wnode/join/node.join.component';
import { WorkflowWNodeOutGoingHookComponent } from './workflow/wnode/outgoinghook/node.outgoinghook.component';
import { WorkflowWNodePipelineComponent } from './workflow/wnode/pipeline/wnode.pipeline.component';
import { WorkflowWNodeComponent } from './workflow/wnode/wnode.component';
import { NgxAutoScrollDirective } from 'app/shared/directives/auto-scroll.directive';
import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { AimOutline, ApartmentOutline, ArrowDownOutline, ArrowRightOutline, AudioOutline, AudioMutedOutline, BellFill, BellOutline, BookOutline, BorderOutline, BugOutline,CalendarOutline, CaretDownFill, CaretRightFill, CaretUpFill, CheckOutline, CodeOutline, CompressOutline, CopyOutline, CrownOutline, DeleteOutline, DragOutline, EllipsisOutline, EnvironmentOutline, EyeInvisibleOutline, ExpandOutline, ExportOutline, EyeOutline, FieldTimeOutline, FileOutline, FileTextOutline, FilterOutline, FolderOutline, FontColorsOutline, KeyOutline,
    GithubOutline, GitlabOutline, GlobalOutline, HomeOutline, HighlightFill, HistoryOutline, HourglassOutline, IdcardOutline, InfoCircleOutline, LinkOutline, LockOutline, MailOutline, MinusOutline, MoreOutline, PhoneFill, PlayCircleOutline, PlusOutline, PlusSquareOutline, PlusCircleFill, ProfileOutline, QuestionOutline, QuestionCircleOutline, RestOutline, RocketOutline, SafetyCertificateOutline, SaveOutline, SettingFill, ShareAltOutline, StarOutline, StarFill, StopOutline, SyncOutline,
    TableOutline, TagOutline, TagsOutline, ToolFill, UndoOutline, UnlockFill, UnorderedListOutline, UploadOutline, UsbOutline, UserOutline, UserSwitchOutline, WarningOutline, WarningFill } from '@ant-design/icons-angular/icons'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { RequirementsValueComponent } from 'app/shared/requirements/value/requirements.value.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { CardComponent } from 'app/shared/card/card.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { BitbucketIconComponent } from 'app/shared/icons/bitbucket.icon.component';
import { BitbucketIconSuccessComponent } from 'app/shared/icons/bitbucket.icon.success.component';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { TreeComponent } from 'app/shared/tree/tree.component';
import { AutoHeightSidebarCollapseDirective } from 'app/shared/directives/auto-height-sidebar-collapse.directive';

const ngZorroConfig: NzConfig = {
    notification: {nzPauseOnHover: true, nzPlacement: "topRight"},
    icon: {nzTheme: "outline"}
};

const icons: IconDefinition[] = [ AimOutline, ApartmentOutline, ArrowDownOutline, ArrowRightOutline, AudioOutline, AudioMutedOutline, BellFill, BellOutline, BookOutline, BorderOutline, BugOutline, CalendarOutline, CaretDownFill, CaretRightFill, CaretUpFill, CheckOutline, CodeOutline, CompressOutline ,CopyOutline, CrownOutline, DeleteOutline, DragOutline, EllipsisOutline, EnvironmentOutline, ExpandOutline, ExportOutline,
    EyeInvisibleOutline, EyeOutline, FileOutline, FileTextOutline, FieldTimeOutline, FilterOutline, FolderOutline, FontColorsOutline, KeyOutline, GithubOutline, GitlabOutline, GlobalOutline, HomeOutline, HighlightFill, HistoryOutline, HourglassOutline, IdcardOutline, InfoCircleOutline, LinkOutline, LockOutline, MailOutline, MinusOutline, MoreOutline, PhoneFill, PlayCircleOutline, PlusOutline, PlusSquareOutline, PlusCircleFill, ProfileOutline, QuestionOutline, QuestionCircleOutline,
    RestOutline, RocketOutline, SafetyCertificateOutline, SaveOutline, SettingFill, ShareAltOutline, StarOutline, StarFill, StopOutline, SyncOutline, TableOutline, TagOutline, TagsOutline, ToolFill, UndoOutline, UnlockFill, UnorderedListOutline, UploadOutline, UsbOutline, UserOutline, UserSwitchOutline, WarningOutline, WarningFill ];

@NgModule({
    imports: [
        NzAutocompleteModule,
        NzAlertModule,
        NzBadgeModule,
        NzBreadCrumbModule,
        NzButtonModule,
        NzCardModule,
        NzCheckboxModule,
        NzCollapseModule,
        NzDividerModule,
        NzDropDownModule,
        NzFormModule,
        NzGridModule,
        NzIconModule.forRoot(icons),
        NzInputModule,
        NzLayoutModule,
        NzListModule,
        NzModalModule,
        NzNotificationModule,
        NzMenuModule,
        NzPopconfirmModule,
        NzProgressModule,
        NzPopoverModule,
        NzRadioModule,
        NzSelectModule,
        NzSpinModule,
        NzStepsModule,
        NzSwitchModule,
        NzTabsModule,
        NzTableModule,
        NzTagModule,
        NzToolTipModule,
        NzTreeViewModule,
        NzUploadModule,
        CommonModule,
        ClipboardModule,
        FormsModule,
        TranslateModule,
        DragulaModule.forRoot(),
        MomentModule,
        CodemirrorModule,
        ReactiveFormsModule,
        MarkdownModule.forRoot(),
        NguiAutoCompleteModule,
        RouterModule,
        InfiniteScrollModule,
        NgxChartsModule
    ],
    declarations: [
        AutoHeightSidebarCollapseDirective,
        ActionComponent,
        ActionStepComponent,
        ActionStepFormComponent,
        AnsiPipe,
        AsCodeEventComponent,
        AsCodeSaveFormComponent,
        AsCodeSaveModalComponent,
        AuditListComponent,
        AutoFocusInputComponent,
        BitbucketIconComponent,
        BitbucketIconSuccessComponent,
        BreadcrumbComponent,
        CallbackPipe,
        CardComponent,
        ChartComponentComponent,
        CommitListComponent,
        ConditionsComponent,
        CutPipe,
        DataTableComponent,
        DiffItemComponent,
        DiffListComponent,
        DurationMsPipe,
        FavoriteCardsComponent,
        ForMapPipe,
        KeysFormComponent,
        KeysListComponent,
        KeysPipe,
        LabelsEditComponent,
        NgForNumber,
        NgxAutoScrollDirective,
        ParameterFormComponent,
        ParameterListComponent,
        ParameterValueComponent,
        PermissionFormComponent,
        WorkflowPermissionFormComponent,
        PermissionListComponent,
        ProjectBreadcrumbComponent,
        RepoManagerFormComponent,
        RequirementsFormComponent,
        RequirementsListComponent,
        RequirementsValueComponent,
        SafeHtmlPipe,
        ScrollviewComponent,
        SelectorPipe,
        SelectPipe,
        StatusIconComponent,
        TabsComponent,
        TabComponent,
        TreeComponent,
        TruncatePipe,
        UploadButtonComponent,
        UsageApplicationsComponent,
        UsageComponent,
        UsageEnvironmentsComponent,
        UsagePipelinesComponent,
        UsageWorkflowsComponent,
        VariableAuditComponent,
        VariableComponent,
        VariableDiffComponent,
        VariableFormComponent,
        VariableValueComponent,
        VCSStrategyComponent,
        VulnerabilitiesComponent,
        VulnerabilitiesListComponent,
        WorkflowDeleteNodeComponent,
        WorkflowHookMenuEditComponent,
        WorkflowHookModalComponent,
        WorkflowNodeAddWizardComponent,
        WorkflowNodeEditModalComponent,
        WorkflowNodeHookComponent,
        WorkflowNodeHookDetailsComponent,
        WorkflowNodeHookFormComponent,
        WorkflowNodeRunParamComponent,
        WorkflowRunJobComponent,
        WorkflowRunJobVariableComponent,
        WorkflowSidebarRunListComponent,
        WorkflowTemplateApplyFormComponent,
        WorkflowTemplateApplyModalComponent,
        WorkflowTemplateBulkModalComponent,
        WorkflowTemplateParamFormComponent,
        WorkflowTriggerComponent,
        WorkflowWizardNodeConditionComponent,
        WorkflowWizardNodeContextComponent,
        WorkflowWizardNodeInputComponent,
        WorkflowWizardOutgoingHookComponent,
        WorkflowWNodeComponent,
        WorkflowWNodeForkComponent,
        WorkflowWNodeJoinComponent,
        WorkflowWNodeMenuEditComponent,
        WorkflowWNodeOutGoingHookComponent,
        WorkflowWNodePipelineComponent,
    ],
    providers: [
        PermissionService,
        SharedService,
        ToastService,
        AuthenticationGuard,
        NoAuthenticationGuard,
        FeatureGuard,
        { provide: NZ_CONFIG, useValue: ngZorroConfig },
        { provide: NZ_I18N, useValue: en_US }
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
        ActionComponent,
        ActionStepComponent,
        ActionStepFormComponent,
        AnsiPipe,
        AsCodeEventComponent,
        AsCodeSaveFormComponent,
        AsCodeSaveModalComponent,
        AuditListComponent,
        AutoFocusInputComponent,
        AutoHeightSidebarCollapseDirective,
        BitbucketIconComponent,
        BitbucketIconSuccessComponent,
        BreadcrumbComponent,
        CallbackPipe,
        CardComponent,
        ChartComponentComponent,
        ClipboardModule,
        CodemirrorModule,
        CommitListComponent,
        CommonModule,
        ConditionsComponent,
        CutPipe,
        DataTableComponent,
        DiffItemComponent,
        DiffListComponent,
        DragulaModule,
        DurationMsPipe,
        FavoriteCardsComponent,
        ForMapPipe,
        FormsModule,
        InfiniteScrollModule,
        KeysFormComponent,
        KeysListComponent,
        KeysPipe,
        LabelsEditComponent,
        MarkdownModule,
        MomentModule,
        NzAutocompleteModule,
        NgForNumber,
        NgxAutoScrollDirective,
        NzAlertModule,
        NzBadgeModule,
        NzBreadCrumbModule,
        NzButtonModule,
        NzCardModule,
        NzCheckboxModule,
        NzCollapseModule,
        NzDividerModule,
        NzDropDownModule,
        NzFormModule,
        NzGridModule,
        NzIconModule,
        NzInputModule,
        NzLayoutModule,
        NzListModule,
        NzModalModule,
        NzMenuModule,
        NzNotificationModule,
        NzPopconfirmModule,
        NzPopoverModule,
        NzProgressModule,
        NzRadioModule,
        NzSelectModule,
        NzSpinModule,
        NzStepsModule,
        NzSwitchModule,
        NzTabsModule,
        NzTagModule,
        NzTableModule,
        NzToolTipModule,
        NzTreeViewModule,
        NzUploadModule,
        ParameterFormComponent,
        ParameterListComponent,
        ParameterValueComponent,
        PermissionFormComponent,
        WorkflowPermissionFormComponent,
        PermissionListComponent,
        ProjectBreadcrumbComponent,
        ReactiveFormsModule,
        RepoManagerFormComponent,
        RequirementsFormComponent,
        RequirementsListComponent,
        RequirementsValueComponent,
        SafeHtmlPipe,
        ScrollviewComponent,
        SelectorPipe,
        SelectPipe,
        StatusIconComponent,
        TabsComponent,
        TranslateModule,
        TreeComponent,
        TruncatePipe,
        UploadButtonComponent,
        UsageApplicationsComponent,
        UsageComponent,
        UsageEnvironmentsComponent,
        UsagePipelinesComponent,
        UsageWorkflowsComponent,
        VariableComponent,
        VariableFormComponent,
        VariableValueComponent,
        VCSStrategyComponent,
        VulnerabilitiesComponent,
        VulnerabilitiesListComponent,
        WorkflowDeleteNodeComponent,
        WorkflowNodeAddWizardComponent,
        WorkflowNodeEditModalComponent,
        WorkflowNodeHookComponent,
        WorkflowNodeHookDetailsComponent,
        WorkflowNodeHookFormComponent,
        WorkflowNodeRunParamComponent,
        WorkflowRunJobComponent,
        WorkflowRunJobVariableComponent,
        WorkflowSidebarRunListComponent,
        WorkflowTemplateApplyFormComponent,
        WorkflowTemplateApplyModalComponent,
        WorkflowTemplateBulkModalComponent,
        WorkflowTemplateParamFormComponent,
        WorkflowTriggerComponent,
        WorkflowWNodeComponent,
        WorkflowWNodeMenuEditComponent
    ]
})
export class SharedModule {
}

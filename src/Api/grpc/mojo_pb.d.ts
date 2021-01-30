import * as jspb from 'google-protobuf'



export class IsApplicationExistsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): IsApplicationExistsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsApplicationExistsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsApplicationExistsRequest): IsApplicationExistsRequest.AsObject;
  static serializeBinaryToWriter(message: IsApplicationExistsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsApplicationExistsRequest;
  static deserializeBinaryFromReader(message: IsApplicationExistsRequest, reader: jspb.BinaryReader): IsApplicationExistsRequest;
}

export namespace IsApplicationExistsRequest {
  export type AsObject = {
    name: string,
  }
}

export class IsApplicationExistsReply extends jspb.Message {
  getIsExists(): boolean;
  setIsExists(value: boolean): IsApplicationExistsReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsApplicationExistsReply.AsObject;
  static toObject(includeInstance: boolean, msg: IsApplicationExistsReply): IsApplicationExistsReply.AsObject;
  static serializeBinaryToWriter(message: IsApplicationExistsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsApplicationExistsReply;
  static deserializeBinaryFromReader(message: IsApplicationExistsReply, reader: jspb.BinaryReader): IsApplicationExistsReply;
}

export namespace IsApplicationExistsReply {
  export type AsObject = {
    isExists: boolean,
  }
}

export class IsExecutionExistsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): IsExecutionExistsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsExecutionExistsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsExecutionExistsRequest): IsExecutionExistsRequest.AsObject;
  static serializeBinaryToWriter(message: IsExecutionExistsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsExecutionExistsRequest;
  static deserializeBinaryFromReader(message: IsExecutionExistsRequest, reader: jspb.BinaryReader): IsExecutionExistsRequest;
}

export namespace IsExecutionExistsRequest {
  export type AsObject = {
    name: string,
  }
}

export class IsExecutionExistsReply extends jspb.Message {
  getIsExists(): boolean;
  setIsExists(value: boolean): IsExecutionExistsReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsExecutionExistsReply.AsObject;
  static toObject(includeInstance: boolean, msg: IsExecutionExistsReply): IsExecutionExistsReply.AsObject;
  static serializeBinaryToWriter(message: IsExecutionExistsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsExecutionExistsReply;
  static deserializeBinaryFromReader(message: IsExecutionExistsReply, reader: jspb.BinaryReader): IsExecutionExistsReply;
}

export namespace IsExecutionExistsReply {
  export type AsObject = {
    isExists: boolean,
  }
}

export class CreateApplicationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateApplicationRequest;

  getWorkloadType(): string;
  setWorkloadType(value: string): CreateApplicationRequest;

  getWorkloadSettings(): string;
  setWorkloadSettings(value: string): CreateApplicationRequest;

  getInput(): string;
  setInput(value: string): CreateApplicationRequest;

  getEnvironmentVariablesMap(): jspb.Map<string, string>;
  clearEnvironmentVariablesMap(): CreateApplicationRequest;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): CreateApplicationRequest;
  clearTagsList(): CreateApplicationRequest;
  addTags(value: string, index?: number): CreateApplicationRequest;

  getTriggersList(): Array<Trigger>;
  setTriggersList(value: Array<Trigger>): CreateApplicationRequest;
  clearTriggersList(): CreateApplicationRequest;
  addTriggers(value?: Trigger, index?: number): Trigger;

  getTasksList(): Array<Task>;
  setTasksList(value: Array<Task>): CreateApplicationRequest;
  clearTasksList(): CreateApplicationRequest;
  addTasks(value?: Task, index?: number): Task;

  getFlowGraphData(): string;
  setFlowGraphData(value: string): CreateApplicationRequest;

  getEmailNotifyUserListList(): Array<string>;
  setEmailNotifyUserListList(value: Array<string>): CreateApplicationRequest;
  clearEmailNotifyUserListList(): CreateApplicationRequest;
  addEmailNotifyUserList(value: string, index?: number): CreateApplicationRequest;

  getComment(): string;
  setComment(value: string): CreateApplicationRequest;

  getTimeout(): number;
  setTimeout(value: number): CreateApplicationRequest;

  getMaxRetry(): number;
  setMaxRetry(value: number): CreateApplicationRequest;

  getViewersList(): Array<string>;
  setViewersList(value: Array<string>): CreateApplicationRequest;
  clearViewersList(): CreateApplicationRequest;
  addViewers(value: string, index?: number): CreateApplicationRequest;

  getEditorsList(): Array<string>;
  setEditorsList(value: Array<string>): CreateApplicationRequest;
  clearEditorsList(): CreateApplicationRequest;
  addEditors(value: string, index?: number): CreateApplicationRequest;

  getEmailNotify(): boolean;
  setEmailNotify(value: boolean): CreateApplicationRequest;

  getTspkg(): string;
  setTspkg(value: string): CreateApplicationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateApplicationRequest): CreateApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateApplicationRequest;
  static deserializeBinaryFromReader(message: CreateApplicationRequest, reader: jspb.BinaryReader): CreateApplicationRequest;
}

export namespace CreateApplicationRequest {
  export type AsObject = {
    name: string,
    workloadType: string,
    workloadSettings: string,
    input: string,
    environmentVariablesMap: Array<[string, string]>,
    tagsList: Array<string>,
    triggersList: Array<Trigger.AsObject>,
    tasksList: Array<Task.AsObject>,
    flowGraphData: string,
    emailNotifyUserListList: Array<string>,
    comment: string,
    timeout: number,
    maxRetry: number,
    viewersList: Array<string>,
    editorsList: Array<string>,
    emailNotify: boolean,
    tspkg: string,
  }
}

export class ScheduledTime extends jspb.Message {
  getStartTime(): number;
  setStartTime(value: number): ScheduledTime;

  getEvery(): number;
  setEvery(value: number): ScheduledTime;

  getUnit(): string;
  setUnit(value: string): ScheduledTime;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduledTime.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduledTime): ScheduledTime.AsObject;
  static serializeBinaryToWriter(message: ScheduledTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduledTime;
  static deserializeBinaryFromReader(message: ScheduledTime, reader: jspb.BinaryReader): ScheduledTime;
}

export namespace ScheduledTime {
  export type AsObject = {
    startTime: number,
    every: number,
    unit: string,
  }
}

export class Trigger extends jspb.Message {
  getId(): string;
  setId(value: string): Trigger;

  getType(): string;
  setType(value: string): Trigger;

  getTurnedOn(): boolean;
  setTurnedOn(value: boolean): Trigger;

  getCronSpec(): string;
  setCronSpec(value: string): Trigger;

  getScheduledTimeData(): ScheduledTime | undefined;
  setScheduledTimeData(value?: ScheduledTime): Trigger;
  hasScheduledTimeData(): boolean;
  clearScheduledTimeData(): Trigger;

  getTopicdata(): Trigger.TopicData | undefined;
  setTopicdata(value?: Trigger.TopicData): Trigger;
  hasTopicdata(): boolean;
  clearTopicdata(): Trigger;

  getQueuedata(): Trigger.QueueData | undefined;
  setQueuedata(value?: Trigger.QueueData): Trigger;
  hasQueuedata(): boolean;
  clearQueuedata(): Trigger;

  getAppData(): Trigger.AppData | undefined;
  setAppData(value?: Trigger.AppData): Trigger;
  hasAppData(): boolean;
  clearAppData(): Trigger;

  getDatasetDataListList(): Array<Trigger.DatasetData>;
  setDatasetDataListList(value: Array<Trigger.DatasetData>): Trigger;
  clearDatasetDataListList(): Trigger;
  addDatasetDataList(value?: Trigger.DatasetData, index?: number): Trigger.DatasetData;

  getRecover(): boolean;
  setRecover(value: boolean): Trigger;

  getIsRepeated(): boolean;
  setIsRepeated(value: boolean): Trigger;

  getLastRun(): number;
  setLastRun(value: number): Trigger;

  getLastRunExecutionId(): string;
  setLastRunExecutionId(value: string): Trigger;

  getCreatedat(): number;
  setCreatedat(value: number): Trigger;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Trigger.AsObject;
  static toObject(includeInstance: boolean, msg: Trigger): Trigger.AsObject;
  static serializeBinaryToWriter(message: Trigger, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Trigger;
  static deserializeBinaryFromReader(message: Trigger, reader: jspb.BinaryReader): Trigger;
}

export namespace Trigger {
  export type AsObject = {
    id: string,
    type: string,
    turnedOn: boolean,
    cronSpec: string,
    scheduledTimeData?: ScheduledTime.AsObject,
    topicdata?: Trigger.TopicData.AsObject,
    queuedata?: Trigger.QueueData.AsObject,
    appData?: Trigger.AppData.AsObject,
    datasetDataListList: Array<Trigger.DatasetData.AsObject>,
    recover: boolean,
    isRepeated: boolean,
    lastRun: number,
    lastRunExecutionId: string,
    createdat: number,
  }

  export class TopicData extends jspb.Message {
    getType(): string;
    setType(value: string): TopicData;

    getName(): string;
    setName(value: string): TopicData;

    getInputKey(): string;
    setInputKey(value: string): TopicData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TopicData.AsObject;
    static toObject(includeInstance: boolean, msg: TopicData): TopicData.AsObject;
    static serializeBinaryToWriter(message: TopicData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TopicData;
    static deserializeBinaryFromReader(message: TopicData, reader: jspb.BinaryReader): TopicData;
  }

  export namespace TopicData {
    export type AsObject = {
      type: string,
      name: string,
      inputKey: string,
    }
  }


  export class QueueData extends jspb.Message {
    getType(): string;
    setType(value: string): QueueData;

    getName(): string;
    setName(value: string): QueueData;

    getInputKey(): string;
    setInputKey(value: string): QueueData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueueData.AsObject;
    static toObject(includeInstance: boolean, msg: QueueData): QueueData.AsObject;
    static serializeBinaryToWriter(message: QueueData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueueData;
    static deserializeBinaryFromReader(message: QueueData, reader: jspb.BinaryReader): QueueData;
  }

  export namespace QueueData {
    export type AsObject = {
      type: string,
      name: string,
      inputKey: string,
    }
  }


  export class AppData extends jspb.Message {
    getStatus(): string;
    setStatus(value: string): AppData;

    getApplicationId(): string;
    setApplicationId(value: string): AppData;

    getApplicationName(): string;
    setApplicationName(value: string): AppData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppData.AsObject;
    static toObject(includeInstance: boolean, msg: AppData): AppData.AsObject;
    static serializeBinaryToWriter(message: AppData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppData;
    static deserializeBinaryFromReader(message: AppData, reader: jspb.BinaryReader): AppData;
  }

  export namespace AppData {
    export type AsObject = {
      status: string,
      applicationId: string,
      applicationName: string,
    }
  }


  export class DatasetData extends jspb.Message {
    getLocation(): string;
    setLocation(value: string): DatasetData;

    getClusterId(): string;
    setClusterId(value: string): DatasetData;

    getClusterName(): string;
    setClusterName(value: string): DatasetData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DatasetData.AsObject;
    static toObject(includeInstance: boolean, msg: DatasetData): DatasetData.AsObject;
    static serializeBinaryToWriter(message: DatasetData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DatasetData;
    static deserializeBinaryFromReader(message: DatasetData, reader: jspb.BinaryReader): DatasetData;
  }

  export namespace DatasetData {
    export type AsObject = {
      location: string,
      clusterId: string,
      clusterName: string,
    }
  }

}

export class Task extends jspb.Message {
  getName(): string;
  setName(value: string): Task;

  getApplicationId(): string;
  setApplicationId(value: string): Task;

  getType(): string;
  setType(value: string): Task;

  getUpstreamTasksList(): Array<string>;
  setUpstreamTasksList(value: Array<string>): Task;
  clearUpstreamTasksList(): Task;
  addUpstreamTasks(value: string, index?: number): Task;

  getWhen(): string;
  setWhen(value: string): Task;

  getInput(): string;
  setInput(value: string): Task;

  getEnvironmentVariablesMap(): jspb.Map<string, string>;
  clearEnvironmentVariablesMap(): Task;

  getIsSuspended(): boolean;
  setIsSuspended(value: boolean): Task;

  getStatus(): string;
  setStatus(value: string): Task;

  getExecutionId(): string;
  setExecutionId(value: string): Task;

  getApplicationName(): string;
  setApplicationName(value: string): Task;

  getResult(): string;
  setResult(value: string): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
  export type AsObject = {
    name: string,
    applicationId: string,
    type: string,
    upstreamTasksList: Array<string>,
    when: string,
    input: string,
    environmentVariablesMap: Array<[string, string]>,
    isSuspended: boolean,
    status: string,
    executionId: string,
    applicationName: string,
    result: string,
  }
}

export class CreateApplicationReply extends jspb.Message {
  getResult(): Application | undefined;
  setResult(value?: Application): CreateApplicationReply;
  hasResult(): boolean;
  clearResult(): CreateApplicationReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateApplicationReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateApplicationReply): CreateApplicationReply.AsObject;
  static serializeBinaryToWriter(message: CreateApplicationReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateApplicationReply;
  static deserializeBinaryFromReader(message: CreateApplicationReply, reader: jspb.BinaryReader): CreateApplicationReply;
}

export namespace CreateApplicationReply {
  export type AsObject = {
    result?: Application.AsObject,
  }
}

export class Application extends jspb.Message {
  getName(): string;
  setName(value: string): Application;

  getWorkloadType(): string;
  setWorkloadType(value: string): Application;

  getWorkloadSettings(): string;
  setWorkloadSettings(value: string): Application;

  getInput(): string;
  setInput(value: string): Application;

  getEnvironmentVariablesMap(): jspb.Map<string, string>;
  clearEnvironmentVariablesMap(): Application;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): Application;
  clearTagsList(): Application;
  addTags(value: string, index?: number): Application;

  getTriggersList(): Array<Trigger>;
  setTriggersList(value: Array<Trigger>): Application;
  clearTriggersList(): Application;
  addTriggers(value?: Trigger, index?: number): Trigger;

  getCreator(): string;
  setCreator(value: string): Application;

  getApplicationId(): string;
  setApplicationId(value: string): Application;

  getClusterName(): string;
  setClusterName(value: string): Application;

  getCreatedTime(): number;
  setCreatedTime(value: number): Application;

  getClusterId(): string;
  setClusterId(value: string): Application;

  getTasksList(): Array<Task>;
  setTasksList(value: Array<Task>): Application;
  clearTasksList(): Application;
  addTasks(value?: Task, index?: number): Task;

  getFlowGraphData(): string;
  setFlowGraphData(value: string): Application;

  getEmailNotify(): boolean;
  setEmailNotify(value: boolean): Application;

  getEmailNotifyUserListList(): Array<string>;
  setEmailNotifyUserListList(value: Array<string>): Application;
  clearEmailNotifyUserListList(): Application;
  addEmailNotifyUserList(value: string, index?: number): Application;

  getComment(): string;
  setComment(value: string): Application;

  getTimeout(): number;
  setTimeout(value: number): Application;

  getMaxRetry(): number;
  setMaxRetry(value: number): Application;

  getCurRetryCount(): number;
  setCurRetryCount(value: number): Application;

  getViewersList(): Array<string>;
  setViewersList(value: Array<string>): Application;
  clearViewersList(): Application;
  addViewers(value: string, index?: number): Application;

  getEditorsList(): Array<string>;
  setEditorsList(value: Array<string>): Application;
  clearEditorsList(): Application;
  addEditors(value: string, index?: number): Application;

  getFavoritedByList(): Array<string>;
  setFavoritedByList(value: Array<string>): Application;
  clearFavoritedByList(): Application;
  addFavoritedBy(value: string, index?: number): Application;

  getSystemLogList(): Array<Event>;
  setSystemLogList(value: Array<Event>): Application;
  clearSystemLogList(): Application;
  addSystemLog(value?: Event, index?: number): Event;

  getTspkg(): string;
  setTspkg(value: string): Application;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Application.AsObject;
  static toObject(includeInstance: boolean, msg: Application): Application.AsObject;
  static serializeBinaryToWriter(message: Application, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Application;
  static deserializeBinaryFromReader(message: Application, reader: jspb.BinaryReader): Application;
}

export namespace Application {
  export type AsObject = {
    name: string,
    workloadType: string,
    workloadSettings: string,
    input: string,
    environmentVariablesMap: Array<[string, string]>,
    tagsList: Array<string>,
    triggersList: Array<Trigger.AsObject>,
    creator: string,
    applicationId: string,
    clusterName: string,
    createdTime: number,
    clusterId: string,
    tasksList: Array<Task.AsObject>,
    flowGraphData: string,
    emailNotify: boolean,
    emailNotifyUserListList: Array<string>,
    comment: string,
    timeout: number,
    maxRetry: number,
    curRetryCount: number,
    viewersList: Array<string>,
    editorsList: Array<string>,
    favoritedByList: Array<string>,
    systemLogList: Array<Event.AsObject>,
    tspkg: string,
  }
}

export class DeleteApplicationRequest extends jspb.Message {
  getApplicationIdsList(): Array<string>;
  setApplicationIdsList(value: Array<string>): DeleteApplicationRequest;
  clearApplicationIdsList(): DeleteApplicationRequest;
  addApplicationIds(value: string, index?: number): DeleteApplicationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApplicationRequest): DeleteApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApplicationRequest;
  static deserializeBinaryFromReader(message: DeleteApplicationRequest, reader: jspb.BinaryReader): DeleteApplicationRequest;
}

export namespace DeleteApplicationRequest {
  export type AsObject = {
    applicationIdsList: Array<string>,
  }
}

export class DeleteApplicationReply extends jspb.Message {
  getSucceededList(): Array<string>;
  setSucceededList(value: Array<string>): DeleteApplicationReply;
  clearSucceededList(): DeleteApplicationReply;
  addSucceeded(value: string, index?: number): DeleteApplicationReply;

  getFailedList(): Array<string>;
  setFailedList(value: Array<string>): DeleteApplicationReply;
  clearFailedList(): DeleteApplicationReply;
  addFailed(value: string, index?: number): DeleteApplicationReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApplicationReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApplicationReply): DeleteApplicationReply.AsObject;
  static serializeBinaryToWriter(message: DeleteApplicationReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApplicationReply;
  static deserializeBinaryFromReader(message: DeleteApplicationReply, reader: jspb.BinaryReader): DeleteApplicationReply;
}

export namespace DeleteApplicationReply {
  export type AsObject = {
    succeededList: Array<string>,
    failedList: Array<string>,
  }
}

export class UpdateApplicationRequest extends jspb.Message {
  getOldApplicationInfo(): Application | undefined;
  setOldApplicationInfo(value?: Application): UpdateApplicationRequest;
  hasOldApplicationInfo(): boolean;
  clearOldApplicationInfo(): UpdateApplicationRequest;

  getUpdateApplicationInfo(): Application | undefined;
  setUpdateApplicationInfo(value?: Application): UpdateApplicationRequest;
  hasUpdateApplicationInfo(): boolean;
  clearUpdateApplicationInfo(): UpdateApplicationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateApplicationRequest): UpdateApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateApplicationRequest;
  static deserializeBinaryFromReader(message: UpdateApplicationRequest, reader: jspb.BinaryReader): UpdateApplicationRequest;
}

export namespace UpdateApplicationRequest {
  export type AsObject = {
    oldApplicationInfo?: Application.AsObject,
    updateApplicationInfo?: Application.AsObject,
  }
}

export class UpdateApplicationReply extends jspb.Message {
  getApplication(): Application | undefined;
  setApplication(value?: Application): UpdateApplicationReply;
  hasApplication(): boolean;
  clearApplication(): UpdateApplicationReply;

  getFailedUpdateFieldList(): Array<string>;
  setFailedUpdateFieldList(value: Array<string>): UpdateApplicationReply;
  clearFailedUpdateFieldList(): UpdateApplicationReply;
  addFailedUpdateField(value: string, index?: number): UpdateApplicationReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateApplicationReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateApplicationReply): UpdateApplicationReply.AsObject;
  static serializeBinaryToWriter(message: UpdateApplicationReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateApplicationReply;
  static deserializeBinaryFromReader(message: UpdateApplicationReply, reader: jspb.BinaryReader): UpdateApplicationReply;
}

export namespace UpdateApplicationReply {
  export type AsObject = {
    application?: Application.AsObject,
    failedUpdateFieldList: Array<string>,
  }
}

export class SuspendTaskRequest extends jspb.Message {
  getApplicationId(): string;
  setApplicationId(value: string): SuspendTaskRequest;

  getExecutionId(): string;
  setExecutionId(value: string): SuspendTaskRequest;

  getTaskName(): string;
  setTaskName(value: string): SuspendTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuspendTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SuspendTaskRequest): SuspendTaskRequest.AsObject;
  static serializeBinaryToWriter(message: SuspendTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuspendTaskRequest;
  static deserializeBinaryFromReader(message: SuspendTaskRequest, reader: jspb.BinaryReader): SuspendTaskRequest;
}

export namespace SuspendTaskRequest {
  export type AsObject = {
    applicationId: string,
    executionId: string,
    taskName: string,
  }
}

export class SuspendTaskReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuspendTaskReply.AsObject;
  static toObject(includeInstance: boolean, msg: SuspendTaskReply): SuspendTaskReply.AsObject;
  static serializeBinaryToWriter(message: SuspendTaskReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuspendTaskReply;
  static deserializeBinaryFromReader(message: SuspendTaskReply, reader: jspb.BinaryReader): SuspendTaskReply;
}

export namespace SuspendTaskReply {
  export type AsObject = {
  }
}

export class ResumeTaskRequest extends jspb.Message {
  getApplicationId(): string;
  setApplicationId(value: string): ResumeTaskRequest;

  getExecutionId(): string;
  setExecutionId(value: string): ResumeTaskRequest;

  getTaskName(): string;
  setTaskName(value: string): ResumeTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeTaskRequest): ResumeTaskRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeTaskRequest;
  static deserializeBinaryFromReader(message: ResumeTaskRequest, reader: jspb.BinaryReader): ResumeTaskRequest;
}

export namespace ResumeTaskRequest {
  export type AsObject = {
    applicationId: string,
    executionId: string,
    taskName: string,
  }
}

export class ResumeTaskReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeTaskReply.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeTaskReply): ResumeTaskReply.AsObject;
  static serializeBinaryToWriter(message: ResumeTaskReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeTaskReply;
  static deserializeBinaryFromReader(message: ResumeTaskReply, reader: jspb.BinaryReader): ResumeTaskReply;
}

export namespace ResumeTaskReply {
  export type AsObject = {
  }
}

export class RetryTaskRequest extends jspb.Message {
  getExecutionId(): string;
  setExecutionId(value: string): RetryTaskRequest;

  getTaskName(): string;
  setTaskName(value: string): RetryTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetryTaskRequest): RetryTaskRequest.AsObject;
  static serializeBinaryToWriter(message: RetryTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryTaskRequest;
  static deserializeBinaryFromReader(message: RetryTaskRequest, reader: jspb.BinaryReader): RetryTaskRequest;
}

export namespace RetryTaskRequest {
  export type AsObject = {
    executionId: string,
    taskName: string,
  }
}

export class RetryTaskReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryTaskReply.AsObject;
  static toObject(includeInstance: boolean, msg: RetryTaskReply): RetryTaskReply.AsObject;
  static serializeBinaryToWriter(message: RetryTaskReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryTaskReply;
  static deserializeBinaryFromReader(message: RetryTaskReply, reader: jspb.BinaryReader): RetryTaskReply;
}

export namespace RetryTaskReply {
  export type AsObject = {
  }
}

export class GetApplicationRequest extends jspb.Message {
  getApplicationId(): string;
  setApplicationId(value: string): GetApplicationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetApplicationRequest): GetApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: GetApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApplicationRequest;
  static deserializeBinaryFromReader(message: GetApplicationRequest, reader: jspb.BinaryReader): GetApplicationRequest;
}

export namespace GetApplicationRequest {
  export type AsObject = {
    applicationId: string,
  }
}

export class GetApplicationReply extends jspb.Message {
  getResult(): Application | undefined;
  setResult(value?: Application): GetApplicationReply;
  hasResult(): boolean;
  clearResult(): GetApplicationReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApplicationReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetApplicationReply): GetApplicationReply.AsObject;
  static serializeBinaryToWriter(message: GetApplicationReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApplicationReply;
  static deserializeBinaryFromReader(message: GetApplicationReply, reader: jspb.BinaryReader): GetApplicationReply;
}

export namespace GetApplicationReply {
  export type AsObject = {
    result?: Application.AsObject,
  }
}

export class ListApplicationRequest extends jspb.Message {
  getSearchField(): string;
  setSearchField(value: string): ListApplicationRequest;

  getClusterName(): string;
  setClusterName(value: string): ListApplicationRequest;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): ListApplicationRequest;
  clearTagsList(): ListApplicationRequest;
  addTags(value: string, index?: number): ListApplicationRequest;

  getTriggerTypesList(): Array<string>;
  setTriggerTypesList(value: Array<string>): ListApplicationRequest;
  clearTriggerTypesList(): ListApplicationRequest;
  addTriggerTypes(value: string, index?: number): ListApplicationRequest;

  getWorkloadType(): string;
  setWorkloadType(value: string): ListApplicationRequest;

  getEdittype(): string;
  setEdittype(value: string): ListApplicationRequest;

  getOrderByCreateTime(): number;
  setOrderByCreateTime(value: number): ListApplicationRequest;

  getPageIdx(): number;
  setPageIdx(value: number): ListApplicationRequest;

  getPageSize(): number;
  setPageSize(value: number): ListApplicationRequest;

  getFavoritedBy(): boolean;
  setFavoritedBy(value: boolean): ListApplicationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListApplicationRequest): ListApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: ListApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApplicationRequest;
  static deserializeBinaryFromReader(message: ListApplicationRequest, reader: jspb.BinaryReader): ListApplicationRequest;
}

export namespace ListApplicationRequest {
  export type AsObject = {
    searchField: string,
    clusterName: string,
    tagsList: Array<string>,
    triggerTypesList: Array<string>,
    workloadType: string,
    edittype: string,
    orderByCreateTime: number,
    pageIdx: number,
    pageSize: number,
    favoritedBy: boolean,
  }
}

export class ListApplicationReply extends jspb.Message {
  getApplicationInfosList(): Array<ApplicationInfo>;
  setApplicationInfosList(value: Array<ApplicationInfo>): ListApplicationReply;
  clearApplicationInfosList(): ListApplicationReply;
  addApplicationInfos(value?: ApplicationInfo, index?: number): ApplicationInfo;

  getTotal(): number;
  setTotal(value: number): ListApplicationReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApplicationReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListApplicationReply): ListApplicationReply.AsObject;
  static serializeBinaryToWriter(message: ListApplicationReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApplicationReply;
  static deserializeBinaryFromReader(message: ListApplicationReply, reader: jspb.BinaryReader): ListApplicationReply;
}

export namespace ListApplicationReply {
  export type AsObject = {
    applicationInfosList: Array<ApplicationInfo.AsObject>,
    total: number,
  }
}

export class ApplicationInfo extends jspb.Message {
  getName(): string;
  setName(value: string): ApplicationInfo;

  getApplicationId(): string;
  setApplicationId(value: string): ApplicationInfo;

  getWorkloadType(): string;
  setWorkloadType(value: string): ApplicationInfo;

  getClusterName(): string;
  setClusterName(value: string): ApplicationInfo;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): ApplicationInfo;
  clearTagsList(): ApplicationInfo;
  addTags(value: string, index?: number): ApplicationInfo;

  getCreator(): string;
  setCreator(value: string): ApplicationInfo;

  getCreatedTime(): number;
  setCreatedTime(value: number): ApplicationInfo;

  getTriggersList(): Array<Trigger>;
  setTriggersList(value: Array<Trigger>): ApplicationInfo;
  clearTriggersList(): ApplicationInfo;
  addTriggers(value?: Trigger, index?: number): Trigger;

  getComment(): string;
  setComment(value: string): ApplicationInfo;

  getTimeout(): number;
  setTimeout(value: number): ApplicationInfo;

  getMaxRetry(): number;
  setMaxRetry(value: number): ApplicationInfo;

  getCurRetryCount(): number;
  setCurRetryCount(value: number): ApplicationInfo;

  getViewersList(): Array<string>;
  setViewersList(value: Array<string>): ApplicationInfo;
  clearViewersList(): ApplicationInfo;
  addViewers(value: string, index?: number): ApplicationInfo;

  getEditorsList(): Array<string>;
  setEditorsList(value: Array<string>): ApplicationInfo;
  clearEditorsList(): ApplicationInfo;
  addEditors(value: string, index?: number): ApplicationInfo;

  getFavoritedByList(): Array<string>;
  setFavoritedByList(value: Array<string>): ApplicationInfo;
  clearFavoritedByList(): ApplicationInfo;
  addFavoritedBy(value: string, index?: number): ApplicationInfo;

  getEmailNotifyUserListList(): Array<string>;
  setEmailNotifyUserListList(value: Array<string>): ApplicationInfo;
  clearEmailNotifyUserListList(): ApplicationInfo;
  addEmailNotifyUserList(value: string, index?: number): ApplicationInfo;

  getEmailNotify(): boolean;
  setEmailNotify(value: boolean): ApplicationInfo;

  getTspkg(): string;
  setTspkg(value: string): ApplicationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationInfo): ApplicationInfo.AsObject;
  static serializeBinaryToWriter(message: ApplicationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationInfo;
  static deserializeBinaryFromReader(message: ApplicationInfo, reader: jspb.BinaryReader): ApplicationInfo;
}

export namespace ApplicationInfo {
  export type AsObject = {
    name: string,
    applicationId: string,
    workloadType: string,
    clusterName: string,
    tagsList: Array<string>,
    creator: string,
    createdTime: number,
    triggersList: Array<Trigger.AsObject>,
    comment: string,
    timeout: number,
    maxRetry: number,
    curRetryCount: number,
    viewersList: Array<string>,
    editorsList: Array<string>,
    favoritedByList: Array<string>,
    emailNotifyUserListList: Array<string>,
    emailNotify: boolean,
    tspkg: string,
  }
}

export class TriggeredBy extends jspb.Message {
  getType(): string;
  setType(value: string): TriggeredBy;

  getData(): string;
  setData(value: string): TriggeredBy;

  getExecutionId(): string;
  setExecutionId(value: string): TriggeredBy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggeredBy.AsObject;
  static toObject(includeInstance: boolean, msg: TriggeredBy): TriggeredBy.AsObject;
  static serializeBinaryToWriter(message: TriggeredBy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggeredBy;
  static deserializeBinaryFromReader(message: TriggeredBy, reader: jspb.BinaryReader): TriggeredBy;
}

export namespace TriggeredBy {
  export type AsObject = {
    type: string,
    data: string,
    executionId: string,
  }
}

export class CreateExecutionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateExecutionRequest;

  getWorkloadType(): string;
  setWorkloadType(value: string): CreateExecutionRequest;

  getWorkloadSettings(): string;
  setWorkloadSettings(value: string): CreateExecutionRequest;

  getInput(): string;
  setInput(value: string): CreateExecutionRequest;

  getEnvironmentVariablesMap(): jspb.Map<string, string>;
  clearEnvironmentVariablesMap(): CreateExecutionRequest;

  getUseDefaultEnv(): boolean;
  setUseDefaultEnv(value: boolean): CreateExecutionRequest;

  getApplicationId(): string;
  setApplicationId(value: string): CreateExecutionRequest;

  getTriggeredBy(): TriggeredBy | undefined;
  setTriggeredBy(value?: TriggeredBy): CreateExecutionRequest;
  hasTriggeredBy(): boolean;
  clearTriggeredBy(): CreateExecutionRequest;

  getEmailNotify(): boolean;
  setEmailNotify(value: boolean): CreateExecutionRequest;

  getEmailNotifyUserListList(): Array<string>;
  setEmailNotifyUserListList(value: Array<string>): CreateExecutionRequest;
  clearEmailNotifyUserListList(): CreateExecutionRequest;
  addEmailNotifyUserList(value: string, index?: number): CreateExecutionRequest;

  getComment(): string;
  setComment(value: string): CreateExecutionRequest;

  getTimeout(): number;
  setTimeout(value: number): CreateExecutionRequest;

  getMaxRetry(): number;
  setMaxRetry(value: number): CreateExecutionRequest;

  getClusterId(): string;
  setClusterId(value: string): CreateExecutionRequest;

  getClusterName(): string;
  setClusterName(value: string): CreateExecutionRequest;

  getViewersList(): Array<string>;
  setViewersList(value: Array<string>): CreateExecutionRequest;
  clearViewersList(): CreateExecutionRequest;
  addViewers(value: string, index?: number): CreateExecutionRequest;

  getEditorsList(): Array<string>;
  setEditorsList(value: Array<string>): CreateExecutionRequest;
  clearEditorsList(): CreateExecutionRequest;
  addEditors(value: string, index?: number): CreateExecutionRequest;

  getDatasetName(): string;
  setDatasetName(value: string): CreateExecutionRequest;

  getTspkg(): string;
  setTspkg(value: string): CreateExecutionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateExecutionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateExecutionRequest): CreateExecutionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateExecutionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateExecutionRequest;
  static deserializeBinaryFromReader(message: CreateExecutionRequest, reader: jspb.BinaryReader): CreateExecutionRequest;
}

export namespace CreateExecutionRequest {
  export type AsObject = {
    name: string,
    workloadType: string,
    workloadSettings: string,
    input: string,
    environmentVariablesMap: Array<[string, string]>,
    useDefaultEnv: boolean,
    applicationId: string,
    triggeredBy?: TriggeredBy.AsObject,
    emailNotify: boolean,
    emailNotifyUserListList: Array<string>,
    comment: string,
    timeout: number,
    maxRetry: number,
    clusterId: string,
    clusterName: string,
    viewersList: Array<string>,
    editorsList: Array<string>,
    datasetName: string,
    tspkg: string,
  }
}

export class CreateExecutionReply extends jspb.Message {
  getResult(): Execution | undefined;
  setResult(value?: Execution): CreateExecutionReply;
  hasResult(): boolean;
  clearResult(): CreateExecutionReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateExecutionReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateExecutionReply): CreateExecutionReply.AsObject;
  static serializeBinaryToWriter(message: CreateExecutionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateExecutionReply;
  static deserializeBinaryFromReader(message: CreateExecutionReply, reader: jspb.BinaryReader): CreateExecutionReply;
}

export namespace CreateExecutionReply {
  export type AsObject = {
    result?: Execution.AsObject,
  }
}

export class Event extends jspb.Message {
  getTimeStamp(): number;
  setTimeStamp(value: number): Event;

  getMessage(): string;
  setMessage(value: string): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    timeStamp: number,
    message: string,
  }
}

export class Execution extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): Execution;

  getName(): string;
  setName(value: string): Execution;

  getWorkloadType(): string;
  setWorkloadType(value: string): Execution;

  getClusterName(): string;
  setClusterName(value: string): Execution;

  getApplicationName(): string;
  setApplicationName(value: string): Execution;

  getApplicationId(): string;
  setApplicationId(value: string): Execution;

  getTaskName(): string;
  setTaskName(value: string): Execution;

  getCreator(): string;
  setCreator(value: string): Execution;

  getStartTime(): number;
  setStartTime(value: number): Execution;

  getFinishTime(): number;
  setFinishTime(value: number): Execution;

  getWorkloadSettings(): string;
  setWorkloadSettings(value: string): Execution;

  getExecutionId(): string;
  setExecutionId(value: string): Execution;

  getInput(): string;
  setInput(value: string): Execution;

  getOutputMap(): jspb.Map<string, string>;
  clearOutputMap(): Execution;

  getWorkloadId(): string;
  setWorkloadId(value: string): Execution;

  getClusterId(): string;
  setClusterId(value: string): Execution;

  getEnvironmentVariablesMap(): jspb.Map<string, string>;
  clearEnvironmentVariablesMap(): Execution;

  getFlowExecutionId(): string;
  setFlowExecutionId(value: string): Execution;

  getIsSuspended(): boolean;
  setIsSuspended(value: boolean): Execution;

  getTasksList(): Array<Task>;
  setTasksList(value: Array<Task>): Execution;
  clearTasksList(): Execution;
  addTasks(value?: Task, index?: number): Task;

  getTriggeredBy(): TriggeredBy | undefined;
  setTriggeredBy(value?: TriggeredBy): Execution;
  hasTriggeredBy(): boolean;
  clearTriggeredBy(): Execution;

  getEmailNotify(): boolean;
  setEmailNotify(value: boolean): Execution;

  getEmailNotifyUserListList(): Array<string>;
  setEmailNotifyUserListList(value: Array<string>): Execution;
  clearEmailNotifyUserListList(): Execution;
  addEmailNotifyUserList(value: string, index?: number): Execution;

  getComment(): string;
  setComment(value: string): Execution;

  getTimeout(): number;
  setTimeout(value: number): Execution;

  getSystemLogList(): Array<Event>;
  setSystemLogList(value: Array<Event>): Execution;
  clearSystemLogList(): Execution;
  addSystemLog(value?: Event, index?: number): Event;

  getMaxRetry(): number;
  setMaxRetry(value: number): Execution;

  getCurRetryCount(): number;
  setCurRetryCount(value: number): Execution;

  getViewersList(): Array<string>;
  setViewersList(value: Array<string>): Execution;
  clearViewersList(): Execution;
  addViewers(value: string, index?: number): Execution;

  getEditorsList(): Array<string>;
  setEditorsList(value: Array<string>): Execution;
  clearEditorsList(): Execution;
  addEditors(value: string, index?: number): Execution;

  getFavoritedByList(): Array<string>;
  setFavoritedByList(value: Array<string>): Execution;
  clearFavoritedByList(): Execution;
  addFavoritedBy(value: string, index?: number): Execution;

  getDatasetName(): string;
  setDatasetName(value: string): Execution;

  getTspkg(): string;
  setTspkg(value: string): Execution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Execution.AsObject;
  static toObject(includeInstance: boolean, msg: Execution): Execution.AsObject;
  static serializeBinaryToWriter(message: Execution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Execution;
  static deserializeBinaryFromReader(message: Execution, reader: jspb.BinaryReader): Execution;
}

export namespace Execution {
  export type AsObject = {
    status: string,
    name: string,
    workloadType: string,
    clusterName: string,
    applicationName: string,
    applicationId: string,
    taskName: string,
    creator: string,
    startTime: number,
    finishTime: number,
    workloadSettings: string,
    executionId: string,
    input: string,
    outputMap: Array<[string, string]>,
    workloadId: string,
    clusterId: string,
    environmentVariablesMap: Array<[string, string]>,
    flowExecutionId: string,
    isSuspended: boolean,
    tasksList: Array<Task.AsObject>,
    triggeredBy?: TriggeredBy.AsObject,
    emailNotify: boolean,
    emailNotifyUserListList: Array<string>,
    comment: string,
    timeout: number,
    systemLogList: Array<Event.AsObject>,
    maxRetry: number,
    curRetryCount: number,
    viewersList: Array<string>,
    editorsList: Array<string>,
    favoritedByList: Array<string>,
    datasetName: string,
    tspkg: string,
  }
}

export class DeleteExecutionRequest extends jspb.Message {
  getExecutionIdsList(): Array<string>;
  setExecutionIdsList(value: Array<string>): DeleteExecutionRequest;
  clearExecutionIdsList(): DeleteExecutionRequest;
  addExecutionIds(value: string, index?: number): DeleteExecutionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteExecutionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteExecutionRequest): DeleteExecutionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteExecutionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteExecutionRequest;
  static deserializeBinaryFromReader(message: DeleteExecutionRequest, reader: jspb.BinaryReader): DeleteExecutionRequest;
}

export namespace DeleteExecutionRequest {
  export type AsObject = {
    executionIdsList: Array<string>,
  }
}

export class DeleteExecutionReply extends jspb.Message {
  getSucceededList(): Array<string>;
  setSucceededList(value: Array<string>): DeleteExecutionReply;
  clearSucceededList(): DeleteExecutionReply;
  addSucceeded(value: string, index?: number): DeleteExecutionReply;

  getFailedList(): Array<string>;
  setFailedList(value: Array<string>): DeleteExecutionReply;
  clearFailedList(): DeleteExecutionReply;
  addFailed(value: string, index?: number): DeleteExecutionReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteExecutionReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteExecutionReply): DeleteExecutionReply.AsObject;
  static serializeBinaryToWriter(message: DeleteExecutionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteExecutionReply;
  static deserializeBinaryFromReader(message: DeleteExecutionReply, reader: jspb.BinaryReader): DeleteExecutionReply;
}

export namespace DeleteExecutionReply {
  export type AsObject = {
    succeededList: Array<string>,
    failedList: Array<string>,
  }
}

export class KillExecutionRequest extends jspb.Message {
  getExecutionId(): string;
  setExecutionId(value: string): KillExecutionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KillExecutionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KillExecutionRequest): KillExecutionRequest.AsObject;
  static serializeBinaryToWriter(message: KillExecutionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KillExecutionRequest;
  static deserializeBinaryFromReader(message: KillExecutionRequest, reader: jspb.BinaryReader): KillExecutionRequest;
}

export namespace KillExecutionRequest {
  export type AsObject = {
    executionId: string,
  }
}

export class KillExecutionReply extends jspb.Message {
  getExecutionName(): string;
  setExecutionName(value: string): KillExecutionReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KillExecutionReply.AsObject;
  static toObject(includeInstance: boolean, msg: KillExecutionReply): KillExecutionReply.AsObject;
  static serializeBinaryToWriter(message: KillExecutionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KillExecutionReply;
  static deserializeBinaryFromReader(message: KillExecutionReply, reader: jspb.BinaryReader): KillExecutionReply;
}

export namespace KillExecutionReply {
  export type AsObject = {
    executionName: string,
  }
}

export class GetExecutionRequest extends jspb.Message {
  getExecutionId(): string;
  setExecutionId(value: string): GetExecutionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExecutionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetExecutionRequest): GetExecutionRequest.AsObject;
  static serializeBinaryToWriter(message: GetExecutionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExecutionRequest;
  static deserializeBinaryFromReader(message: GetExecutionRequest, reader: jspb.BinaryReader): GetExecutionRequest;
}

export namespace GetExecutionRequest {
  export type AsObject = {
    executionId: string,
  }
}

export class GetExecutionReply extends jspb.Message {
  getResult(): Execution | undefined;
  setResult(value?: Execution): GetExecutionReply;
  hasResult(): boolean;
  clearResult(): GetExecutionReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExecutionReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetExecutionReply): GetExecutionReply.AsObject;
  static serializeBinaryToWriter(message: GetExecutionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExecutionReply;
  static deserializeBinaryFromReader(message: GetExecutionReply, reader: jspb.BinaryReader): GetExecutionReply;
}

export namespace GetExecutionReply {
  export type AsObject = {
    result?: Execution.AsObject,
  }
}

export class ListExecutionRequest extends jspb.Message {
  getSearchField(): string;
  setSearchField(value: string): ListExecutionRequest;

  getStatusList(): Array<string>;
  setStatusList(value: Array<string>): ListExecutionRequest;
  clearStatusList(): ListExecutionRequest;
  addStatus(value: string, index?: number): ListExecutionRequest;

  getWorkloadType(): string;
  setWorkloadType(value: string): ListExecutionRequest;

  getClusterName(): string;
  setClusterName(value: string): ListExecutionRequest;

  getApplicationId(): string;
  setApplicationId(value: string): ListExecutionRequest;

  getEdittype(): string;
  setEdittype(value: string): ListExecutionRequest;

  getOrderField(): string;
  setOrderField(value: string): ListExecutionRequest;

  getOrderBy(): number;
  setOrderBy(value: number): ListExecutionRequest;

  getPageIdx(): number;
  setPageIdx(value: number): ListExecutionRequest;

  getPageSize(): number;
  setPageSize(value: number): ListExecutionRequest;

  getTriggeredByList(): Array<string>;
  setTriggeredByList(value: Array<string>): ListExecutionRequest;
  clearTriggeredByList(): ListExecutionRequest;
  addTriggeredBy(value: string, index?: number): ListExecutionRequest;

  getFlowApplicationId(): string;
  setFlowApplicationId(value: string): ListExecutionRequest;

  getTaskName(): string;
  setTaskName(value: string): ListExecutionRequest;

  getFavoritedBy(): boolean;
  setFavoritedBy(value: boolean): ListExecutionRequest;

  getDatasetName(): string;
  setDatasetName(value: string): ListExecutionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExecutionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListExecutionRequest): ListExecutionRequest.AsObject;
  static serializeBinaryToWriter(message: ListExecutionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExecutionRequest;
  static deserializeBinaryFromReader(message: ListExecutionRequest, reader: jspb.BinaryReader): ListExecutionRequest;
}

export namespace ListExecutionRequest {
  export type AsObject = {
    searchField: string,
    statusList: Array<string>,
    workloadType: string,
    clusterName: string,
    applicationId: string,
    edittype: string,
    orderField: string,
    orderBy: number,
    pageIdx: number,
    pageSize: number,
    triggeredByList: Array<string>,
    flowApplicationId: string,
    taskName: string,
    favoritedBy: boolean,
    datasetName: string,
  }
}

export class ListExecutionReply extends jspb.Message {
  getExecutionInfosList(): Array<ExecutionInfo>;
  setExecutionInfosList(value: Array<ExecutionInfo>): ListExecutionReply;
  clearExecutionInfosList(): ListExecutionReply;
  addExecutionInfos(value?: ExecutionInfo, index?: number): ExecutionInfo;

  getTotal(): number;
  setTotal(value: number): ListExecutionReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExecutionReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListExecutionReply): ListExecutionReply.AsObject;
  static serializeBinaryToWriter(message: ListExecutionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExecutionReply;
  static deserializeBinaryFromReader(message: ListExecutionReply, reader: jspb.BinaryReader): ListExecutionReply;
}

export namespace ListExecutionReply {
  export type AsObject = {
    executionInfosList: Array<ExecutionInfo.AsObject>,
    total: number,
  }
}

export class ExecutionInfo extends jspb.Message {
  getName(): string;
  setName(value: string): ExecutionInfo;

  getExecutionId(): string;
  setExecutionId(value: string): ExecutionInfo;

  getStatus(): string;
  setStatus(value: string): ExecutionInfo;

  getWorkloadType(): string;
  setWorkloadType(value: string): ExecutionInfo;

  getWorkloadId(): string;
  setWorkloadId(value: string): ExecutionInfo;

  getClusterId(): string;
  setClusterId(value: string): ExecutionInfo;

  getClusterName(): string;
  setClusterName(value: string): ExecutionInfo;

  getApplicationId(): string;
  setApplicationId(value: string): ExecutionInfo;

  getApplicationName(): string;
  setApplicationName(value: string): ExecutionInfo;

  getCreator(): string;
  setCreator(value: string): ExecutionInfo;

  getStartTime(): number;
  setStartTime(value: number): ExecutionInfo;

  getFinishTime(): number;
  setFinishTime(value: number): ExecutionInfo;

  getTriggeredBy(): TriggeredBy | undefined;
  setTriggeredBy(value?: TriggeredBy): ExecutionInfo;
  hasTriggeredBy(): boolean;
  clearTriggeredBy(): ExecutionInfo;

  getIsSuspended(): boolean;
  setIsSuspended(value: boolean): ExecutionInfo;

  getSucceededTaskCount(): number;
  setSucceededTaskCount(value: number): ExecutionInfo;

  getFailedTaskCount(): number;
  setFailedTaskCount(value: number): ExecutionInfo;

  getErrorTaskCount(): number;
  setErrorTaskCount(value: number): ExecutionInfo;

  getStartedTaskCount(): number;
  setStartedTaskCount(value: number): ExecutionInfo;

  getSuspendedTaskCount(): number;
  setSuspendedTaskCount(value: number): ExecutionInfo;

  getNoneTaskCount(): number;
  setNoneTaskCount(value: number): ExecutionInfo;

  getTimeout(): number;
  setTimeout(value: number): ExecutionInfo;

  getMaxRetry(): number;
  setMaxRetry(value: number): ExecutionInfo;

  getCurRetryCount(): number;
  setCurRetryCount(value: number): ExecutionInfo;

  getViewersList(): Array<string>;
  setViewersList(value: Array<string>): ExecutionInfo;
  clearViewersList(): ExecutionInfo;
  addViewers(value: string, index?: number): ExecutionInfo;

  getEditorsList(): Array<string>;
  setEditorsList(value: Array<string>): ExecutionInfo;
  clearEditorsList(): ExecutionInfo;
  addEditors(value: string, index?: number): ExecutionInfo;

  getTasksList(): Array<Task>;
  setTasksList(value: Array<Task>): ExecutionInfo;
  clearTasksList(): ExecutionInfo;
  addTasks(value?: Task, index?: number): Task;

  getFavoritedByList(): Array<string>;
  setFavoritedByList(value: Array<string>): ExecutionInfo;
  clearFavoritedByList(): ExecutionInfo;
  addFavoritedBy(value: string, index?: number): ExecutionInfo;

  getDatasetName(): string;
  setDatasetName(value: string): ExecutionInfo;

  getEmailNotifyUserListList(): Array<string>;
  setEmailNotifyUserListList(value: Array<string>): ExecutionInfo;
  clearEmailNotifyUserListList(): ExecutionInfo;
  addEmailNotifyUserList(value: string, index?: number): ExecutionInfo;

  getEmailNotify(): boolean;
  setEmailNotify(value: boolean): ExecutionInfo;

  getTspkg(): string;
  setTspkg(value: string): ExecutionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutionInfo): ExecutionInfo.AsObject;
  static serializeBinaryToWriter(message: ExecutionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutionInfo;
  static deserializeBinaryFromReader(message: ExecutionInfo, reader: jspb.BinaryReader): ExecutionInfo;
}

export namespace ExecutionInfo {
  export type AsObject = {
    name: string,
    executionId: string,
    status: string,
    workloadType: string,
    workloadId: string,
    clusterId: string,
    clusterName: string,
    applicationId: string,
    applicationName: string,
    creator: string,
    startTime: number,
    finishTime: number,
    triggeredBy?: TriggeredBy.AsObject,
    isSuspended: boolean,
    succeededTaskCount: number,
    failedTaskCount: number,
    errorTaskCount: number,
    startedTaskCount: number,
    suspendedTaskCount: number,
    noneTaskCount: number,
    timeout: number,
    maxRetry: number,
    curRetryCount: number,
    viewersList: Array<string>,
    editorsList: Array<string>,
    tasksList: Array<Task.AsObject>,
    favoritedByList: Array<string>,
    datasetName: string,
    emailNotifyUserListList: Array<string>,
    emailNotify: boolean,
    tspkg: string,
  }
}

export class GetInputRequest extends jspb.Message {
  getExecutionId(): string;
  setExecutionId(value: string): GetInputRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInputRequest): GetInputRequest.AsObject;
  static serializeBinaryToWriter(message: GetInputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInputRequest;
  static deserializeBinaryFromReader(message: GetInputRequest, reader: jspb.BinaryReader): GetInputRequest;
}

export namespace GetInputRequest {
  export type AsObject = {
    executionId: string,
  }
}

export class GetInputReply extends jspb.Message {
  getInput(): string;
  setInput(value: string): GetInputReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInputReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetInputReply): GetInputReply.AsObject;
  static serializeBinaryToWriter(message: GetInputReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInputReply;
  static deserializeBinaryFromReader(message: GetInputReply, reader: jspb.BinaryReader): GetInputReply;
}

export namespace GetInputReply {
  export type AsObject = {
    input: string,
  }
}

export class WriteOutputRequest extends jspb.Message {
  getExecutionId(): string;
  setExecutionId(value: string): WriteOutputRequest;

  getPodHostname(): string;
  setPodHostname(value: string): WriteOutputRequest;

  getOutput(): string;
  setOutput(value: string): WriteOutputRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteOutputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WriteOutputRequest): WriteOutputRequest.AsObject;
  static serializeBinaryToWriter(message: WriteOutputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteOutputRequest;
  static deserializeBinaryFromReader(message: WriteOutputRequest, reader: jspb.BinaryReader): WriteOutputRequest;
}

export namespace WriteOutputRequest {
  export type AsObject = {
    executionId: string,
    podHostname: string,
    output: string,
  }
}

export class WriteOutputReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteOutputReply.AsObject;
  static toObject(includeInstance: boolean, msg: WriteOutputReply): WriteOutputReply.AsObject;
  static serializeBinaryToWriter(message: WriteOutputReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteOutputReply;
  static deserializeBinaryFromReader(message: WriteOutputReply, reader: jspb.BinaryReader): WriteOutputReply;
}

export namespace WriteOutputReply {
  export type AsObject = {
  }
}

export class ListTagRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTagRequest): ListTagRequest.AsObject;
  static serializeBinaryToWriter(message: ListTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTagRequest;
  static deserializeBinaryFromReader(message: ListTagRequest, reader: jspb.BinaryReader): ListTagRequest;
}

export namespace ListTagRequest {
  export type AsObject = {
  }
}

export class ListTagReply extends jspb.Message {
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): ListTagReply;
  clearTagsList(): ListTagReply;
  addTags(value: string, index?: number): ListTagReply;

  getTotal(): number;
  setTotal(value: number): ListTagReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTagReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListTagReply): ListTagReply.AsObject;
  static serializeBinaryToWriter(message: ListTagReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTagReply;
  static deserializeBinaryFromReader(message: ListTagReply, reader: jspb.BinaryReader): ListTagReply;
}

export namespace ListTagReply {
  export type AsObject = {
    tagsList: Array<string>,
    total: number,
  }
}

export class UpdateTriggerRequest extends jspb.Message {
  getTriggerId(): string;
  setTriggerId(value: string): UpdateTriggerRequest;

  getTurnedOn(): boolean;
  setTurnedOn(value: boolean): UpdateTriggerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTriggerRequest): UpdateTriggerRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTriggerRequest;
  static deserializeBinaryFromReader(message: UpdateTriggerRequest, reader: jspb.BinaryReader): UpdateTriggerRequest;
}

export namespace UpdateTriggerRequest {
  export type AsObject = {
    triggerId: string,
    turnedOn: boolean,
  }
}

export class UpdateTriggerReply extends jspb.Message {
  getTriggerId(): string;
  setTriggerId(value: string): UpdateTriggerReply;

  getCurrentStatus(): boolean;
  setCurrentStatus(value: boolean): UpdateTriggerReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTriggerReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTriggerReply): UpdateTriggerReply.AsObject;
  static serializeBinaryToWriter(message: UpdateTriggerReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTriggerReply;
  static deserializeBinaryFromReader(message: UpdateTriggerReply, reader: jspb.BinaryReader): UpdateTriggerReply;
}

export namespace UpdateTriggerReply {
  export type AsObject = {
    triggerId: string,
    currentStatus: boolean,
  }
}

export class ValidateCronRequest extends jspb.Message {
  getData(): string;
  setData(value: string): ValidateCronRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateCronRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateCronRequest): ValidateCronRequest.AsObject;
  static serializeBinaryToWriter(message: ValidateCronRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateCronRequest;
  static deserializeBinaryFromReader(message: ValidateCronRequest, reader: jspb.BinaryReader): ValidateCronRequest;
}

export namespace ValidateCronRequest {
  export type AsObject = {
    data: string,
  }
}

export class ValidateCronReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateCronReply.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateCronReply): ValidateCronReply.AsObject;
  static serializeBinaryToWriter(message: ValidateCronReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateCronReply;
  static deserializeBinaryFromReader(message: ValidateCronReply, reader: jspb.BinaryReader): ValidateCronReply;
}

export namespace ValidateCronReply {
  export type AsObject = {
  }
}

export class UpdateEmailNotifyRequest extends jspb.Message {
  getApplicationId(): string;
  setApplicationId(value: string): UpdateEmailNotifyRequest;

  getExecutionId(): string;
  setExecutionId(value: string): UpdateEmailNotifyRequest;

  getEmailNotifyUserListList(): Array<string>;
  setEmailNotifyUserListList(value: Array<string>): UpdateEmailNotifyRequest;
  clearEmailNotifyUserListList(): UpdateEmailNotifyRequest;
  addEmailNotifyUserList(value: string, index?: number): UpdateEmailNotifyRequest;

  getEmailNotify(): boolean;
  setEmailNotify(value: boolean): UpdateEmailNotifyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEmailNotifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEmailNotifyRequest): UpdateEmailNotifyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEmailNotifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEmailNotifyRequest;
  static deserializeBinaryFromReader(message: UpdateEmailNotifyRequest, reader: jspb.BinaryReader): UpdateEmailNotifyRequest;
}

export namespace UpdateEmailNotifyRequest {
  export type AsObject = {
    applicationId: string,
    executionId: string,
    emailNotifyUserListList: Array<string>,
    emailNotify: boolean,
  }
}

export class UpdateEmailNotifyReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEmailNotifyReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEmailNotifyReply): UpdateEmailNotifyReply.AsObject;
  static serializeBinaryToWriter(message: UpdateEmailNotifyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEmailNotifyReply;
  static deserializeBinaryFromReader(message: UpdateEmailNotifyReply, reader: jspb.BinaryReader): UpdateEmailNotifyReply;
}

export namespace UpdateEmailNotifyReply {
  export type AsObject = {
  }
}

export class CheckAppTriggerRequest extends jspb.Message {
  getApplicationId(): string;
  setApplicationId(value: string): CheckAppTriggerRequest;

  getTriggerApplicationId(): string;
  setTriggerApplicationId(value: string): CheckAppTriggerRequest;

  getStatus(): string;
  setStatus(value: string): CheckAppTriggerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckAppTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckAppTriggerRequest): CheckAppTriggerRequest.AsObject;
  static serializeBinaryToWriter(message: CheckAppTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckAppTriggerRequest;
  static deserializeBinaryFromReader(message: CheckAppTriggerRequest, reader: jspb.BinaryReader): CheckAppTriggerRequest;
}

export namespace CheckAppTriggerRequest {
  export type AsObject = {
    applicationId: string,
    triggerApplicationId: string,
    status: string,
  }
}

export class CheckAppTriggerReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckAppTriggerReply.AsObject;
  static toObject(includeInstance: boolean, msg: CheckAppTriggerReply): CheckAppTriggerReply.AsObject;
  static serializeBinaryToWriter(message: CheckAppTriggerReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckAppTriggerReply;
  static deserializeBinaryFromReader(message: CheckAppTriggerReply, reader: jspb.BinaryReader): CheckAppTriggerReply;
}

export namespace CheckAppTriggerReply {
  export type AsObject = {
  }
}

export class IsAdminRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsAdminRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsAdminRequest): IsAdminRequest.AsObject;
  static serializeBinaryToWriter(message: IsAdminRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsAdminRequest;
  static deserializeBinaryFromReader(message: IsAdminRequest, reader: jspb.BinaryReader): IsAdminRequest;
}

export namespace IsAdminRequest {
  export type AsObject = {
  }
}

export class IsAdminReply extends jspb.Message {
  getAdmin(): boolean;
  setAdmin(value: boolean): IsAdminReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsAdminReply.AsObject;
  static toObject(includeInstance: boolean, msg: IsAdminReply): IsAdminReply.AsObject;
  static serializeBinaryToWriter(message: IsAdminReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsAdminReply;
  static deserializeBinaryFromReader(message: IsAdminReply, reader: jspb.BinaryReader): IsAdminReply;
}

export namespace IsAdminReply {
  export type AsObject = {
    admin: boolean,
  }
}

export class FavoriteRequest extends jspb.Message {
  getId(): string;
  setId(value: string): FavoriteRequest;

  getType(): string;
  setType(value: string): FavoriteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FavoriteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FavoriteRequest): FavoriteRequest.AsObject;
  static serializeBinaryToWriter(message: FavoriteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FavoriteRequest;
  static deserializeBinaryFromReader(message: FavoriteRequest, reader: jspb.BinaryReader): FavoriteRequest;
}

export namespace FavoriteRequest {
  export type AsObject = {
    id: string,
    type: string,
  }
}

export class FavoriteReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FavoriteReply.AsObject;
  static toObject(includeInstance: boolean, msg: FavoriteReply): FavoriteReply.AsObject;
  static serializeBinaryToWriter(message: FavoriteReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FavoriteReply;
  static deserializeBinaryFromReader(message: FavoriteReply, reader: jspb.BinaryReader): FavoriteReply;
}

export namespace FavoriteReply {
  export type AsObject = {
  }
}

export class UnFavoriteRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UnFavoriteRequest;

  getType(): string;
  setType(value: string): UnFavoriteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnFavoriteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnFavoriteRequest): UnFavoriteRequest.AsObject;
  static serializeBinaryToWriter(message: UnFavoriteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnFavoriteRequest;
  static deserializeBinaryFromReader(message: UnFavoriteRequest, reader: jspb.BinaryReader): UnFavoriteRequest;
}

export namespace UnFavoriteRequest {
  export type AsObject = {
    id: string,
    type: string,
  }
}

export class UnFavoriteReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnFavoriteReply.AsObject;
  static toObject(includeInstance: boolean, msg: UnFavoriteReply): UnFavoriteReply.AsObject;
  static serializeBinaryToWriter(message: UnFavoriteReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnFavoriteReply;
  static deserializeBinaryFromReader(message: UnFavoriteReply, reader: jspb.BinaryReader): UnFavoriteReply;
}

export namespace UnFavoriteReply {
  export type AsObject = {
  }
}

export class ListTopicRequest extends jspb.Message {
  getType(): string;
  setType(value: string): ListTopicRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicRequest): ListTopicRequest.AsObject;
  static serializeBinaryToWriter(message: ListTopicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicRequest;
  static deserializeBinaryFromReader(message: ListTopicRequest, reader: jspb.BinaryReader): ListTopicRequest;
}

export namespace ListTopicRequest {
  export type AsObject = {
    type: string,
  }
}

export class ListTopicReply extends jspb.Message {
  getType(): string;
  setType(value: string): ListTopicReply;

  getTopicsList(): Array<string>;
  setTopicsList(value: Array<string>): ListTopicReply;
  clearTopicsList(): ListTopicReply;
  addTopics(value: string, index?: number): ListTopicReply;

  getDatasetTopic(): string;
  setDatasetTopic(value: string): ListTopicReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicReply): ListTopicReply.AsObject;
  static serializeBinaryToWriter(message: ListTopicReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicReply;
  static deserializeBinaryFromReader(message: ListTopicReply, reader: jspb.BinaryReader): ListTopicReply;
}

export namespace ListTopicReply {
  export type AsObject = {
    type: string,
    topicsList: Array<string>,
    datasetTopic: string,
  }
}

export class ListQueueRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListQueueRequest): ListQueueRequest.AsObject;
  static serializeBinaryToWriter(message: ListQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQueueRequest;
  static deserializeBinaryFromReader(message: ListQueueRequest, reader: jspb.BinaryReader): ListQueueRequest;
}

export namespace ListQueueRequest {
  export type AsObject = {
  }
}

export class ListQueueReply extends jspb.Message {
  getQueuesList(): Array<string>;
  setQueuesList(value: Array<string>): ListQueueReply;
  clearQueuesList(): ListQueueReply;
  addQueues(value: string, index?: number): ListQueueReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQueueReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListQueueReply): ListQueueReply.AsObject;
  static serializeBinaryToWriter(message: ListQueueReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQueueReply;
  static deserializeBinaryFromReader(message: ListQueueReply, reader: jspb.BinaryReader): ListQueueReply;
}

export namespace ListQueueReply {
  export type AsObject = {
    queuesList: Array<string>,
  }
}

export class EmailUnsubscribeRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): EmailUnsubscribeRequest;

  getExecutionId(): string;
  setExecutionId(value: string): EmailUnsubscribeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailUnsubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmailUnsubscribeRequest): EmailUnsubscribeRequest.AsObject;
  static serializeBinaryToWriter(message: EmailUnsubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailUnsubscribeRequest;
  static deserializeBinaryFromReader(message: EmailUnsubscribeRequest, reader: jspb.BinaryReader): EmailUnsubscribeRequest;
}

export namespace EmailUnsubscribeRequest {
  export type AsObject = {
    uid: string,
    executionId: string,
  }
}

export class EmailUnsubscribeReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailUnsubscribeReply.AsObject;
  static toObject(includeInstance: boolean, msg: EmailUnsubscribeReply): EmailUnsubscribeReply.AsObject;
  static serializeBinaryToWriter(message: EmailUnsubscribeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailUnsubscribeReply;
  static deserializeBinaryFromReader(message: EmailUnsubscribeReply, reader: jspb.BinaryReader): EmailUnsubscribeReply;
}

export namespace EmailUnsubscribeReply {
  export type AsObject = {
  }
}

export class GetUnSubscribeRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): GetUnSubscribeRequest;

  getAppid(): string;
  setAppid(value: string): GetUnSubscribeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnSubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnSubscribeRequest): GetUnSubscribeRequest.AsObject;
  static serializeBinaryToWriter(message: GetUnSubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnSubscribeRequest;
  static deserializeBinaryFromReader(message: GetUnSubscribeRequest, reader: jspb.BinaryReader): GetUnSubscribeRequest;
}

export namespace GetUnSubscribeRequest {
  export type AsObject = {
    uid: string,
    appid: string,
  }
}

export class unSubscriptionMail extends jspb.Message {
  getUid(): string;
  setUid(value: string): unSubscriptionMail;

  getAppid(): string;
  setAppid(value: string): unSubscriptionMail;

  getActive(): boolean;
  setActive(value: boolean): unSubscriptionMail;

  getHandler(): string;
  setHandler(value: string): unSubscriptionMail;

  getCreatetime(): number;
  setCreatetime(value: number): unSubscriptionMail;

  getUpdatetime(): number;
  setUpdatetime(value: number): unSubscriptionMail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): unSubscriptionMail.AsObject;
  static toObject(includeInstance: boolean, msg: unSubscriptionMail): unSubscriptionMail.AsObject;
  static serializeBinaryToWriter(message: unSubscriptionMail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): unSubscriptionMail;
  static deserializeBinaryFromReader(message: unSubscriptionMail, reader: jspb.BinaryReader): unSubscriptionMail;
}

export namespace unSubscriptionMail {
  export type AsObject = {
    uid: string,
    appid: string,
    active: boolean,
    handler: string,
    createtime: number,
    updatetime: number,
  }
}

export class GetUnSubscribeReply extends jspb.Message {
  getDataList(): Array<unSubscriptionMail>;
  setDataList(value: Array<unSubscriptionMail>): GetUnSubscribeReply;
  clearDataList(): GetUnSubscribeReply;
  addData(value?: unSubscriptionMail, index?: number): unSubscriptionMail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnSubscribeReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnSubscribeReply): GetUnSubscribeReply.AsObject;
  static serializeBinaryToWriter(message: GetUnSubscribeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnSubscribeReply;
  static deserializeBinaryFromReader(message: GetUnSubscribeReply, reader: jspb.BinaryReader): GetUnSubscribeReply;
}

export namespace GetUnSubscribeReply {
  export type AsObject = {
    dataList: Array<unSubscriptionMail.AsObject>,
  }
}

export class EmailReSubscribeRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): EmailReSubscribeRequest;

  getExecutionId(): string;
  setExecutionId(value: string): EmailReSubscribeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailReSubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmailReSubscribeRequest): EmailReSubscribeRequest.AsObject;
  static serializeBinaryToWriter(message: EmailReSubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailReSubscribeRequest;
  static deserializeBinaryFromReader(message: EmailReSubscribeRequest, reader: jspb.BinaryReader): EmailReSubscribeRequest;
}

export namespace EmailReSubscribeRequest {
  export type AsObject = {
    uid: string,
    executionId: string,
  }
}

export class EmailReSubscribeReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailReSubscribeReply.AsObject;
  static toObject(includeInstance: boolean, msg: EmailReSubscribeReply): EmailReSubscribeReply.AsObject;
  static serializeBinaryToWriter(message: EmailReSubscribeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailReSubscribeReply;
  static deserializeBinaryFromReader(message: EmailReSubscribeReply, reader: jspb.BinaryReader): EmailReSubscribeReply;
}

export namespace EmailReSubscribeReply {
  export type AsObject = {
  }
}


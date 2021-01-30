/**
 * @fileoverview gRPC-Web generated client stub for ecos_app
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as src_Api_grpc_mojo_pb from '../../../src/Api/grpc/mojo_pb';


export class ECOS_APPClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoIsApplicationExists = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.IsApplicationExistsReply,
    (request: src_Api_grpc_mojo_pb.IsApplicationExistsRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.IsApplicationExistsReply.deserializeBinary
  );

  isApplicationExists(
    request: src_Api_grpc_mojo_pb.IsApplicationExistsRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.IsApplicationExistsReply>;

  isApplicationExists(
    request: src_Api_grpc_mojo_pb.IsApplicationExistsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.IsApplicationExistsReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.IsApplicationExistsReply>;

  isApplicationExists(
    request: src_Api_grpc_mojo_pb.IsApplicationExistsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.IsApplicationExistsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/IsApplicationExists',
        request,
        metadata || {},
        this.methodInfoIsApplicationExists,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/IsApplicationExists',
    request,
    metadata || {},
    this.methodInfoIsApplicationExists);
  }

  methodInfoCreateApplication = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.CreateApplicationReply,
    (request: src_Api_grpc_mojo_pb.CreateApplicationRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.CreateApplicationReply.deserializeBinary
  );

  createApplication(
    request: src_Api_grpc_mojo_pb.CreateApplicationRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.CreateApplicationReply>;

  createApplication(
    request: src_Api_grpc_mojo_pb.CreateApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.CreateApplicationReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.CreateApplicationReply>;

  createApplication(
    request: src_Api_grpc_mojo_pb.CreateApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.CreateApplicationReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/CreateApplication',
        request,
        metadata || {},
        this.methodInfoCreateApplication,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/CreateApplication',
    request,
    metadata || {},
    this.methodInfoCreateApplication);
  }

  methodInfoDeleteApplication = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.DeleteApplicationReply,
    (request: src_Api_grpc_mojo_pb.DeleteApplicationRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.DeleteApplicationReply.deserializeBinary
  );

  deleteApplication(
    request: src_Api_grpc_mojo_pb.DeleteApplicationRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.DeleteApplicationReply>;

  deleteApplication(
    request: src_Api_grpc_mojo_pb.DeleteApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.DeleteApplicationReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.DeleteApplicationReply>;

  deleteApplication(
    request: src_Api_grpc_mojo_pb.DeleteApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.DeleteApplicationReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/DeleteApplication',
        request,
        metadata || {},
        this.methodInfoDeleteApplication,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/DeleteApplication',
    request,
    metadata || {},
    this.methodInfoDeleteApplication);
  }

  methodInfoUpdateApplication = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.UpdateApplicationReply,
    (request: src_Api_grpc_mojo_pb.UpdateApplicationRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.UpdateApplicationReply.deserializeBinary
  );

  updateApplication(
    request: src_Api_grpc_mojo_pb.UpdateApplicationRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.UpdateApplicationReply>;

  updateApplication(
    request: src_Api_grpc_mojo_pb.UpdateApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.UpdateApplicationReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.UpdateApplicationReply>;

  updateApplication(
    request: src_Api_grpc_mojo_pb.UpdateApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.UpdateApplicationReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/UpdateApplication',
        request,
        metadata || {},
        this.methodInfoUpdateApplication,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/UpdateApplication',
    request,
    metadata || {},
    this.methodInfoUpdateApplication);
  }

  methodInfoGetApplication = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.GetApplicationReply,
    (request: src_Api_grpc_mojo_pb.GetApplicationRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.GetApplicationReply.deserializeBinary
  );

  getApplication(
    request: src_Api_grpc_mojo_pb.GetApplicationRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.GetApplicationReply>;

  getApplication(
    request: src_Api_grpc_mojo_pb.GetApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.GetApplicationReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.GetApplicationReply>;

  getApplication(
    request: src_Api_grpc_mojo_pb.GetApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.GetApplicationReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/GetApplication',
        request,
        metadata || {},
        this.methodInfoGetApplication,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/GetApplication',
    request,
    metadata || {},
    this.methodInfoGetApplication);
  }

  methodInfoListApplication = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.ListApplicationReply,
    (request: src_Api_grpc_mojo_pb.ListApplicationRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.ListApplicationReply.deserializeBinary
  );

  listApplication(
    request: src_Api_grpc_mojo_pb.ListApplicationRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.ListApplicationReply>;

  listApplication(
    request: src_Api_grpc_mojo_pb.ListApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ListApplicationReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.ListApplicationReply>;

  listApplication(
    request: src_Api_grpc_mojo_pb.ListApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ListApplicationReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/ListApplication',
        request,
        metadata || {},
        this.methodInfoListApplication,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/ListApplication',
    request,
    metadata || {},
    this.methodInfoListApplication);
  }

  methodInfoUpdateEmailNotify = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.UpdateEmailNotifyReply,
    (request: src_Api_grpc_mojo_pb.UpdateEmailNotifyRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.UpdateEmailNotifyReply.deserializeBinary
  );

  updateEmailNotify(
    request: src_Api_grpc_mojo_pb.UpdateEmailNotifyRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.UpdateEmailNotifyReply>;

  updateEmailNotify(
    request: src_Api_grpc_mojo_pb.UpdateEmailNotifyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.UpdateEmailNotifyReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.UpdateEmailNotifyReply>;

  updateEmailNotify(
    request: src_Api_grpc_mojo_pb.UpdateEmailNotifyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.UpdateEmailNotifyReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/UpdateEmailNotify',
        request,
        metadata || {},
        this.methodInfoUpdateEmailNotify,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/UpdateEmailNotify',
    request,
    metadata || {},
    this.methodInfoUpdateEmailNotify);
  }

  methodInfoCheckAppTrigger = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.CheckAppTriggerReply,
    (request: src_Api_grpc_mojo_pb.CheckAppTriggerRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.CheckAppTriggerReply.deserializeBinary
  );

  checkAppTrigger(
    request: src_Api_grpc_mojo_pb.CheckAppTriggerRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.CheckAppTriggerReply>;

  checkAppTrigger(
    request: src_Api_grpc_mojo_pb.CheckAppTriggerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.CheckAppTriggerReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.CheckAppTriggerReply>;

  checkAppTrigger(
    request: src_Api_grpc_mojo_pb.CheckAppTriggerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.CheckAppTriggerReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/CheckAppTrigger',
        request,
        metadata || {},
        this.methodInfoCheckAppTrigger,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/CheckAppTrigger',
    request,
    metadata || {},
    this.methodInfoCheckAppTrigger);
  }

  methodInfoListTag = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.ListTagReply,
    (request: src_Api_grpc_mojo_pb.ListTagRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.ListTagReply.deserializeBinary
  );

  listTag(
    request: src_Api_grpc_mojo_pb.ListTagRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.ListTagReply>;

  listTag(
    request: src_Api_grpc_mojo_pb.ListTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ListTagReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.ListTagReply>;

  listTag(
    request: src_Api_grpc_mojo_pb.ListTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ListTagReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/ListTag',
        request,
        metadata || {},
        this.methodInfoListTag,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/ListTag',
    request,
    metadata || {},
    this.methodInfoListTag);
  }

  methodInfoIsExecutionExists = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.IsExecutionExistsReply,
    (request: src_Api_grpc_mojo_pb.IsExecutionExistsRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.IsExecutionExistsReply.deserializeBinary
  );

  isExecutionExists(
    request: src_Api_grpc_mojo_pb.IsExecutionExistsRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.IsExecutionExistsReply>;

  isExecutionExists(
    request: src_Api_grpc_mojo_pb.IsExecutionExistsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.IsExecutionExistsReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.IsExecutionExistsReply>;

  isExecutionExists(
    request: src_Api_grpc_mojo_pb.IsExecutionExistsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.IsExecutionExistsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/IsExecutionExists',
        request,
        metadata || {},
        this.methodInfoIsExecutionExists,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/IsExecutionExists',
    request,
    metadata || {},
    this.methodInfoIsExecutionExists);
  }

  methodInfoCreateExecution = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.CreateExecutionReply,
    (request: src_Api_grpc_mojo_pb.CreateExecutionRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.CreateExecutionReply.deserializeBinary
  );

  createExecution(
    request: src_Api_grpc_mojo_pb.CreateExecutionRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.CreateExecutionReply>;

  createExecution(
    request: src_Api_grpc_mojo_pb.CreateExecutionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.CreateExecutionReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.CreateExecutionReply>;

  createExecution(
    request: src_Api_grpc_mojo_pb.CreateExecutionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.CreateExecutionReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/CreateExecution',
        request,
        metadata || {},
        this.methodInfoCreateExecution,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/CreateExecution',
    request,
    metadata || {},
    this.methodInfoCreateExecution);
  }

  methodInfoDeleteExecution = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.DeleteExecutionReply,
    (request: src_Api_grpc_mojo_pb.DeleteExecutionRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.DeleteExecutionReply.deserializeBinary
  );

  deleteExecution(
    request: src_Api_grpc_mojo_pb.DeleteExecutionRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.DeleteExecutionReply>;

  deleteExecution(
    request: src_Api_grpc_mojo_pb.DeleteExecutionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.DeleteExecutionReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.DeleteExecutionReply>;

  deleteExecution(
    request: src_Api_grpc_mojo_pb.DeleteExecutionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.DeleteExecutionReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/DeleteExecution',
        request,
        metadata || {},
        this.methodInfoDeleteExecution,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/DeleteExecution',
    request,
    metadata || {},
    this.methodInfoDeleteExecution);
  }

  methodInfoKillExecution = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.KillExecutionReply,
    (request: src_Api_grpc_mojo_pb.KillExecutionRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.KillExecutionReply.deserializeBinary
  );

  killExecution(
    request: src_Api_grpc_mojo_pb.KillExecutionRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.KillExecutionReply>;

  killExecution(
    request: src_Api_grpc_mojo_pb.KillExecutionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.KillExecutionReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.KillExecutionReply>;

  killExecution(
    request: src_Api_grpc_mojo_pb.KillExecutionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.KillExecutionReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/KillExecution',
        request,
        metadata || {},
        this.methodInfoKillExecution,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/KillExecution',
    request,
    metadata || {},
    this.methodInfoKillExecution);
  }

  methodInfoGetExecution = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.GetExecutionReply,
    (request: src_Api_grpc_mojo_pb.GetExecutionRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.GetExecutionReply.deserializeBinary
  );

  getExecution(
    request: src_Api_grpc_mojo_pb.GetExecutionRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.GetExecutionReply>;

  getExecution(
    request: src_Api_grpc_mojo_pb.GetExecutionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.GetExecutionReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.GetExecutionReply>;

  getExecution(
    request: src_Api_grpc_mojo_pb.GetExecutionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.GetExecutionReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/GetExecution',
        request,
        metadata || {},
        this.methodInfoGetExecution,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/GetExecution',
    request,
    metadata || {},
    this.methodInfoGetExecution);
  }

  methodInfoListExecution = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.ListExecutionReply,
    (request: src_Api_grpc_mojo_pb.ListExecutionRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.ListExecutionReply.deserializeBinary
  );

  listExecution(
    request: src_Api_grpc_mojo_pb.ListExecutionRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.ListExecutionReply>;

  listExecution(
    request: src_Api_grpc_mojo_pb.ListExecutionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ListExecutionReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.ListExecutionReply>;

  listExecution(
    request: src_Api_grpc_mojo_pb.ListExecutionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ListExecutionReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/ListExecution',
        request,
        metadata || {},
        this.methodInfoListExecution,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/ListExecution',
    request,
    metadata || {},
    this.methodInfoListExecution);
  }

  methodInfoSuspendTask = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.SuspendTaskReply,
    (request: src_Api_grpc_mojo_pb.SuspendTaskRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.SuspendTaskReply.deserializeBinary
  );

  suspendTask(
    request: src_Api_grpc_mojo_pb.SuspendTaskRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.SuspendTaskReply>;

  suspendTask(
    request: src_Api_grpc_mojo_pb.SuspendTaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.SuspendTaskReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.SuspendTaskReply>;

  suspendTask(
    request: src_Api_grpc_mojo_pb.SuspendTaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.SuspendTaskReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/SuspendTask',
        request,
        metadata || {},
        this.methodInfoSuspendTask,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/SuspendTask',
    request,
    metadata || {},
    this.methodInfoSuspendTask);
  }

  methodInfoResumeTask = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.ResumeTaskReply,
    (request: src_Api_grpc_mojo_pb.ResumeTaskRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.ResumeTaskReply.deserializeBinary
  );

  resumeTask(
    request: src_Api_grpc_mojo_pb.ResumeTaskRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.ResumeTaskReply>;

  resumeTask(
    request: src_Api_grpc_mojo_pb.ResumeTaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ResumeTaskReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.ResumeTaskReply>;

  resumeTask(
    request: src_Api_grpc_mojo_pb.ResumeTaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ResumeTaskReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/ResumeTask',
        request,
        metadata || {},
        this.methodInfoResumeTask,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/ResumeTask',
    request,
    metadata || {},
    this.methodInfoResumeTask);
  }

  methodInfoRetryTask = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.RetryTaskReply,
    (request: src_Api_grpc_mojo_pb.RetryTaskRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.RetryTaskReply.deserializeBinary
  );

  retryTask(
    request: src_Api_grpc_mojo_pb.RetryTaskRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.RetryTaskReply>;

  retryTask(
    request: src_Api_grpc_mojo_pb.RetryTaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.RetryTaskReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.RetryTaskReply>;

  retryTask(
    request: src_Api_grpc_mojo_pb.RetryTaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.RetryTaskReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/RetryTask',
        request,
        metadata || {},
        this.methodInfoRetryTask,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/RetryTask',
    request,
    metadata || {},
    this.methodInfoRetryTask);
  }

  methodInfoUpdateTrigger = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.UpdateTriggerReply,
    (request: src_Api_grpc_mojo_pb.UpdateTriggerRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.UpdateTriggerReply.deserializeBinary
  );

  updateTrigger(
    request: src_Api_grpc_mojo_pb.UpdateTriggerRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.UpdateTriggerReply>;

  updateTrigger(
    request: src_Api_grpc_mojo_pb.UpdateTriggerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.UpdateTriggerReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.UpdateTriggerReply>;

  updateTrigger(
    request: src_Api_grpc_mojo_pb.UpdateTriggerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.UpdateTriggerReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/UpdateTrigger',
        request,
        metadata || {},
        this.methodInfoUpdateTrigger,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/UpdateTrigger',
    request,
    metadata || {},
    this.methodInfoUpdateTrigger);
  }

  methodInfoValidateCron = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.ValidateCronReply,
    (request: src_Api_grpc_mojo_pb.ValidateCronRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.ValidateCronReply.deserializeBinary
  );

  validateCron(
    request: src_Api_grpc_mojo_pb.ValidateCronRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.ValidateCronReply>;

  validateCron(
    request: src_Api_grpc_mojo_pb.ValidateCronRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ValidateCronReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.ValidateCronReply>;

  validateCron(
    request: src_Api_grpc_mojo_pb.ValidateCronRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ValidateCronReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/ValidateCron',
        request,
        metadata || {},
        this.methodInfoValidateCron,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/ValidateCron',
    request,
    metadata || {},
    this.methodInfoValidateCron);
  }

  methodInfoListTopic = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.ListTopicReply,
    (request: src_Api_grpc_mojo_pb.ListTopicRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.ListTopicReply.deserializeBinary
  );

  listTopic(
    request: src_Api_grpc_mojo_pb.ListTopicRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.ListTopicReply>;

  listTopic(
    request: src_Api_grpc_mojo_pb.ListTopicRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ListTopicReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.ListTopicReply>;

  listTopic(
    request: src_Api_grpc_mojo_pb.ListTopicRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ListTopicReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/ListTopic',
        request,
        metadata || {},
        this.methodInfoListTopic,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/ListTopic',
    request,
    metadata || {},
    this.methodInfoListTopic);
  }

  methodInfoListQueue = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.ListQueueReply,
    (request: src_Api_grpc_mojo_pb.ListQueueRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.ListQueueReply.deserializeBinary
  );

  listQueue(
    request: src_Api_grpc_mojo_pb.ListQueueRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.ListQueueReply>;

  listQueue(
    request: src_Api_grpc_mojo_pb.ListQueueRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ListQueueReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.ListQueueReply>;

  listQueue(
    request: src_Api_grpc_mojo_pb.ListQueueRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.ListQueueReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/ListQueue',
        request,
        metadata || {},
        this.methodInfoListQueue,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/ListQueue',
    request,
    metadata || {},
    this.methodInfoListQueue);
  }

  methodInfoGetInput = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.GetInputReply,
    (request: src_Api_grpc_mojo_pb.GetInputRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.GetInputReply.deserializeBinary
  );

  getInput(
    request: src_Api_grpc_mojo_pb.GetInputRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.GetInputReply>;

  getInput(
    request: src_Api_grpc_mojo_pb.GetInputRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.GetInputReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.GetInputReply>;

  getInput(
    request: src_Api_grpc_mojo_pb.GetInputRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.GetInputReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/GetInput',
        request,
        metadata || {},
        this.methodInfoGetInput,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/GetInput',
    request,
    metadata || {},
    this.methodInfoGetInput);
  }

  methodInfoWriteOutput = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.WriteOutputReply,
    (request: src_Api_grpc_mojo_pb.WriteOutputRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.WriteOutputReply.deserializeBinary
  );

  writeOutput(
    request: src_Api_grpc_mojo_pb.WriteOutputRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.WriteOutputReply>;

  writeOutput(
    request: src_Api_grpc_mojo_pb.WriteOutputRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.WriteOutputReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.WriteOutputReply>;

  writeOutput(
    request: src_Api_grpc_mojo_pb.WriteOutputRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.WriteOutputReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/WriteOutput',
        request,
        metadata || {},
        this.methodInfoWriteOutput,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/WriteOutput',
    request,
    metadata || {},
    this.methodInfoWriteOutput);
  }

  methodInfoIsAdmin = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.IsAdminReply,
    (request: src_Api_grpc_mojo_pb.IsAdminRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.IsAdminReply.deserializeBinary
  );

  isAdmin(
    request: src_Api_grpc_mojo_pb.IsAdminRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.IsAdminReply>;

  isAdmin(
    request: src_Api_grpc_mojo_pb.IsAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.IsAdminReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.IsAdminReply>;

  isAdmin(
    request: src_Api_grpc_mojo_pb.IsAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.IsAdminReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/IsAdmin',
        request,
        metadata || {},
        this.methodInfoIsAdmin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/IsAdmin',
    request,
    metadata || {},
    this.methodInfoIsAdmin);
  }

  methodInfoFavorite = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.FavoriteReply,
    (request: src_Api_grpc_mojo_pb.FavoriteRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.FavoriteReply.deserializeBinary
  );

  favorite(
    request: src_Api_grpc_mojo_pb.FavoriteRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.FavoriteReply>;

  favorite(
    request: src_Api_grpc_mojo_pb.FavoriteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.FavoriteReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.FavoriteReply>;

  favorite(
    request: src_Api_grpc_mojo_pb.FavoriteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.FavoriteReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/Favorite',
        request,
        metadata || {},
        this.methodInfoFavorite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/Favorite',
    request,
    metadata || {},
    this.methodInfoFavorite);
  }

  methodInfoUnFavorite = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.UnFavoriteReply,
    (request: src_Api_grpc_mojo_pb.UnFavoriteRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.UnFavoriteReply.deserializeBinary
  );

  unFavorite(
    request: src_Api_grpc_mojo_pb.UnFavoriteRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.UnFavoriteReply>;

  unFavorite(
    request: src_Api_grpc_mojo_pb.UnFavoriteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.UnFavoriteReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.UnFavoriteReply>;

  unFavorite(
    request: src_Api_grpc_mojo_pb.UnFavoriteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.UnFavoriteReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/UnFavorite',
        request,
        metadata || {},
        this.methodInfoUnFavorite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/UnFavorite',
    request,
    metadata || {},
    this.methodInfoUnFavorite);
  }

  methodInfoEmailUnsubscribe = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.EmailUnsubscribeReply,
    (request: src_Api_grpc_mojo_pb.EmailUnsubscribeRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.EmailUnsubscribeReply.deserializeBinary
  );

  emailUnsubscribe(
    request: src_Api_grpc_mojo_pb.EmailUnsubscribeRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.EmailUnsubscribeReply>;

  emailUnsubscribe(
    request: src_Api_grpc_mojo_pb.EmailUnsubscribeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.EmailUnsubscribeReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.EmailUnsubscribeReply>;

  emailUnsubscribe(
    request: src_Api_grpc_mojo_pb.EmailUnsubscribeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.EmailUnsubscribeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/EmailUnsubscribe',
        request,
        metadata || {},
        this.methodInfoEmailUnsubscribe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/EmailUnsubscribe',
    request,
    metadata || {},
    this.methodInfoEmailUnsubscribe);
  }

  methodInfoGetUnSubscribe = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.GetUnSubscribeReply,
    (request: src_Api_grpc_mojo_pb.GetUnSubscribeRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.GetUnSubscribeReply.deserializeBinary
  );

  getUnSubscribe(
    request: src_Api_grpc_mojo_pb.GetUnSubscribeRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.GetUnSubscribeReply>;

  getUnSubscribe(
    request: src_Api_grpc_mojo_pb.GetUnSubscribeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.GetUnSubscribeReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.GetUnSubscribeReply>;

  getUnSubscribe(
    request: src_Api_grpc_mojo_pb.GetUnSubscribeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.GetUnSubscribeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/GetUnSubscribe',
        request,
        metadata || {},
        this.methodInfoGetUnSubscribe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/GetUnSubscribe',
    request,
    metadata || {},
    this.methodInfoGetUnSubscribe);
  }

  methodInfoEmailReSubscribe = new grpcWeb.AbstractClientBase.MethodInfo(
    src_Api_grpc_mojo_pb.EmailReSubscribeReply,
    (request: src_Api_grpc_mojo_pb.EmailReSubscribeRequest) => {
      return request.serializeBinary();
    },
    src_Api_grpc_mojo_pb.EmailReSubscribeReply.deserializeBinary
  );

  emailReSubscribe(
    request: src_Api_grpc_mojo_pb.EmailReSubscribeRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_Api_grpc_mojo_pb.EmailReSubscribeReply>;

  emailReSubscribe(
    request: src_Api_grpc_mojo_pb.EmailReSubscribeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.EmailReSubscribeReply) => void): grpcWeb.ClientReadableStream<src_Api_grpc_mojo_pb.EmailReSubscribeReply>;

  emailReSubscribe(
    request: src_Api_grpc_mojo_pb.EmailReSubscribeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_Api_grpc_mojo_pb.EmailReSubscribeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecos_app.ECOS_APP/EmailReSubscribe',
        request,
        metadata || {},
        this.methodInfoEmailReSubscribe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecos_app.ECOS_APP/EmailReSubscribe',
    request,
    metadata || {},
    this.methodInfoEmailReSubscribe);
  }

}


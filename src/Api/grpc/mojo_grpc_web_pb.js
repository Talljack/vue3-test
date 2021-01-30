/**
 * @fileoverview gRPC-Web generated client stub for ecos_app
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.ecos_app = require('./mojo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ecos_app.ECOS_APPClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ecos_app.ECOS_APPPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.IsApplicationExistsRequest,
 *   !proto.ecos_app.IsApplicationExistsReply>}
 */
const methodDescriptor_ECOS_APP_IsApplicationExists = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/IsApplicationExists',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.IsApplicationExistsRequest,
  proto.ecos_app.IsApplicationExistsReply,
  /**
   * @param {!proto.ecos_app.IsApplicationExistsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.IsApplicationExistsReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.IsApplicationExistsRequest,
 *   !proto.ecos_app.IsApplicationExistsReply>}
 */
const methodInfo_ECOS_APP_IsApplicationExists = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.IsApplicationExistsReply,
  /**
   * @param {!proto.ecos_app.IsApplicationExistsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.IsApplicationExistsReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.IsApplicationExistsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.IsApplicationExistsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.IsApplicationExistsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.isApplicationExists =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/IsApplicationExists',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_IsApplicationExists,
      callback);
};


/**
 * @param {!proto.ecos_app.IsApplicationExistsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.IsApplicationExistsReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.isApplicationExists =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/IsApplicationExists',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_IsApplicationExists);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.CreateApplicationRequest,
 *   !proto.ecos_app.CreateApplicationReply>}
 */
const methodDescriptor_ECOS_APP_CreateApplication = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/CreateApplication',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.CreateApplicationRequest,
  proto.ecos_app.CreateApplicationReply,
  /**
   * @param {!proto.ecos_app.CreateApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.CreateApplicationReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.CreateApplicationRequest,
 *   !proto.ecos_app.CreateApplicationReply>}
 */
const methodInfo_ECOS_APP_CreateApplication = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.CreateApplicationReply,
  /**
   * @param {!proto.ecos_app.CreateApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.CreateApplicationReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.CreateApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.CreateApplicationReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.CreateApplicationReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.createApplication =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/CreateApplication',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_CreateApplication,
      callback);
};


/**
 * @param {!proto.ecos_app.CreateApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.CreateApplicationReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.createApplication =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/CreateApplication',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_CreateApplication);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.DeleteApplicationRequest,
 *   !proto.ecos_app.DeleteApplicationReply>}
 */
const methodDescriptor_ECOS_APP_DeleteApplication = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/DeleteApplication',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.DeleteApplicationRequest,
  proto.ecos_app.DeleteApplicationReply,
  /**
   * @param {!proto.ecos_app.DeleteApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.DeleteApplicationReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.DeleteApplicationRequest,
 *   !proto.ecos_app.DeleteApplicationReply>}
 */
const methodInfo_ECOS_APP_DeleteApplication = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.DeleteApplicationReply,
  /**
   * @param {!proto.ecos_app.DeleteApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.DeleteApplicationReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.DeleteApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.DeleteApplicationReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.DeleteApplicationReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.deleteApplication =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/DeleteApplication',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_DeleteApplication,
      callback);
};


/**
 * @param {!proto.ecos_app.DeleteApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.DeleteApplicationReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.deleteApplication =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/DeleteApplication',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_DeleteApplication);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.UpdateApplicationRequest,
 *   !proto.ecos_app.UpdateApplicationReply>}
 */
const methodDescriptor_ECOS_APP_UpdateApplication = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/UpdateApplication',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.UpdateApplicationRequest,
  proto.ecos_app.UpdateApplicationReply,
  /**
   * @param {!proto.ecos_app.UpdateApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.UpdateApplicationReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.UpdateApplicationRequest,
 *   !proto.ecos_app.UpdateApplicationReply>}
 */
const methodInfo_ECOS_APP_UpdateApplication = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.UpdateApplicationReply,
  /**
   * @param {!proto.ecos_app.UpdateApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.UpdateApplicationReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.UpdateApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.UpdateApplicationReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.UpdateApplicationReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.updateApplication =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/UpdateApplication',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_UpdateApplication,
      callback);
};


/**
 * @param {!proto.ecos_app.UpdateApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.UpdateApplicationReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.updateApplication =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/UpdateApplication',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_UpdateApplication);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.GetApplicationRequest,
 *   !proto.ecos_app.GetApplicationReply>}
 */
const methodDescriptor_ECOS_APP_GetApplication = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/GetApplication',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.GetApplicationRequest,
  proto.ecos_app.GetApplicationReply,
  /**
   * @param {!proto.ecos_app.GetApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.GetApplicationReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.GetApplicationRequest,
 *   !proto.ecos_app.GetApplicationReply>}
 */
const methodInfo_ECOS_APP_GetApplication = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.GetApplicationReply,
  /**
   * @param {!proto.ecos_app.GetApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.GetApplicationReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.GetApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.GetApplicationReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.GetApplicationReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.getApplication =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/GetApplication',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_GetApplication,
      callback);
};


/**
 * @param {!proto.ecos_app.GetApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.GetApplicationReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.getApplication =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/GetApplication',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_GetApplication);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.ListApplicationRequest,
 *   !proto.ecos_app.ListApplicationReply>}
 */
const methodDescriptor_ECOS_APP_ListApplication = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/ListApplication',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.ListApplicationRequest,
  proto.ecos_app.ListApplicationReply,
  /**
   * @param {!proto.ecos_app.ListApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.ListApplicationReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.ListApplicationRequest,
 *   !proto.ecos_app.ListApplicationReply>}
 */
const methodInfo_ECOS_APP_ListApplication = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.ListApplicationReply,
  /**
   * @param {!proto.ecos_app.ListApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.ListApplicationReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.ListApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.ListApplicationReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.ListApplicationReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.listApplication =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/ListApplication',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_ListApplication,
      callback);
};


/**
 * @param {!proto.ecos_app.ListApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.ListApplicationReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.listApplication =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/ListApplication',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_ListApplication);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.UpdateEmailNotifyRequest,
 *   !proto.ecos_app.UpdateEmailNotifyReply>}
 */
const methodDescriptor_ECOS_APP_UpdateEmailNotify = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/UpdateEmailNotify',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.UpdateEmailNotifyRequest,
  proto.ecos_app.UpdateEmailNotifyReply,
  /**
   * @param {!proto.ecos_app.UpdateEmailNotifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.UpdateEmailNotifyReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.UpdateEmailNotifyRequest,
 *   !proto.ecos_app.UpdateEmailNotifyReply>}
 */
const methodInfo_ECOS_APP_UpdateEmailNotify = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.UpdateEmailNotifyReply,
  /**
   * @param {!proto.ecos_app.UpdateEmailNotifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.UpdateEmailNotifyReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.UpdateEmailNotifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.UpdateEmailNotifyReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.UpdateEmailNotifyReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.updateEmailNotify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/UpdateEmailNotify',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_UpdateEmailNotify,
      callback);
};


/**
 * @param {!proto.ecos_app.UpdateEmailNotifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.UpdateEmailNotifyReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.updateEmailNotify =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/UpdateEmailNotify',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_UpdateEmailNotify);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.CheckAppTriggerRequest,
 *   !proto.ecos_app.CheckAppTriggerReply>}
 */
const methodDescriptor_ECOS_APP_CheckAppTrigger = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/CheckAppTrigger',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.CheckAppTriggerRequest,
  proto.ecos_app.CheckAppTriggerReply,
  /**
   * @param {!proto.ecos_app.CheckAppTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.CheckAppTriggerReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.CheckAppTriggerRequest,
 *   !proto.ecos_app.CheckAppTriggerReply>}
 */
const methodInfo_ECOS_APP_CheckAppTrigger = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.CheckAppTriggerReply,
  /**
   * @param {!proto.ecos_app.CheckAppTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.CheckAppTriggerReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.CheckAppTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.CheckAppTriggerReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.CheckAppTriggerReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.checkAppTrigger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/CheckAppTrigger',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_CheckAppTrigger,
      callback);
};


/**
 * @param {!proto.ecos_app.CheckAppTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.CheckAppTriggerReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.checkAppTrigger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/CheckAppTrigger',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_CheckAppTrigger);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.ListTagRequest,
 *   !proto.ecos_app.ListTagReply>}
 */
const methodDescriptor_ECOS_APP_ListTag = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/ListTag',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.ListTagRequest,
  proto.ecos_app.ListTagReply,
  /**
   * @param {!proto.ecos_app.ListTagRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.ListTagReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.ListTagRequest,
 *   !proto.ecos_app.ListTagReply>}
 */
const methodInfo_ECOS_APP_ListTag = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.ListTagReply,
  /**
   * @param {!proto.ecos_app.ListTagRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.ListTagReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.ListTagRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.ListTagReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.ListTagReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.listTag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/ListTag',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_ListTag,
      callback);
};


/**
 * @param {!proto.ecos_app.ListTagRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.ListTagReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.listTag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/ListTag',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_ListTag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.IsExecutionExistsRequest,
 *   !proto.ecos_app.IsExecutionExistsReply>}
 */
const methodDescriptor_ECOS_APP_IsExecutionExists = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/IsExecutionExists',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.IsExecutionExistsRequest,
  proto.ecos_app.IsExecutionExistsReply,
  /**
   * @param {!proto.ecos_app.IsExecutionExistsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.IsExecutionExistsReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.IsExecutionExistsRequest,
 *   !proto.ecos_app.IsExecutionExistsReply>}
 */
const methodInfo_ECOS_APP_IsExecutionExists = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.IsExecutionExistsReply,
  /**
   * @param {!proto.ecos_app.IsExecutionExistsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.IsExecutionExistsReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.IsExecutionExistsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.IsExecutionExistsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.IsExecutionExistsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.isExecutionExists =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/IsExecutionExists',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_IsExecutionExists,
      callback);
};


/**
 * @param {!proto.ecos_app.IsExecutionExistsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.IsExecutionExistsReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.isExecutionExists =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/IsExecutionExists',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_IsExecutionExists);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.CreateExecutionRequest,
 *   !proto.ecos_app.CreateExecutionReply>}
 */
const methodDescriptor_ECOS_APP_CreateExecution = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/CreateExecution',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.CreateExecutionRequest,
  proto.ecos_app.CreateExecutionReply,
  /**
   * @param {!proto.ecos_app.CreateExecutionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.CreateExecutionReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.CreateExecutionRequest,
 *   !proto.ecos_app.CreateExecutionReply>}
 */
const methodInfo_ECOS_APP_CreateExecution = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.CreateExecutionReply,
  /**
   * @param {!proto.ecos_app.CreateExecutionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.CreateExecutionReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.CreateExecutionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.CreateExecutionReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.CreateExecutionReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.createExecution =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/CreateExecution',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_CreateExecution,
      callback);
};


/**
 * @param {!proto.ecos_app.CreateExecutionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.CreateExecutionReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.createExecution =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/CreateExecution',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_CreateExecution);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.DeleteExecutionRequest,
 *   !proto.ecos_app.DeleteExecutionReply>}
 */
const methodDescriptor_ECOS_APP_DeleteExecution = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/DeleteExecution',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.DeleteExecutionRequest,
  proto.ecos_app.DeleteExecutionReply,
  /**
   * @param {!proto.ecos_app.DeleteExecutionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.DeleteExecutionReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.DeleteExecutionRequest,
 *   !proto.ecos_app.DeleteExecutionReply>}
 */
const methodInfo_ECOS_APP_DeleteExecution = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.DeleteExecutionReply,
  /**
   * @param {!proto.ecos_app.DeleteExecutionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.DeleteExecutionReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.DeleteExecutionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.DeleteExecutionReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.DeleteExecutionReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.deleteExecution =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/DeleteExecution',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_DeleteExecution,
      callback);
};


/**
 * @param {!proto.ecos_app.DeleteExecutionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.DeleteExecutionReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.deleteExecution =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/DeleteExecution',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_DeleteExecution);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.KillExecutionRequest,
 *   !proto.ecos_app.KillExecutionReply>}
 */
const methodDescriptor_ECOS_APP_KillExecution = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/KillExecution',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.KillExecutionRequest,
  proto.ecos_app.KillExecutionReply,
  /**
   * @param {!proto.ecos_app.KillExecutionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.KillExecutionReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.KillExecutionRequest,
 *   !proto.ecos_app.KillExecutionReply>}
 */
const methodInfo_ECOS_APP_KillExecution = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.KillExecutionReply,
  /**
   * @param {!proto.ecos_app.KillExecutionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.KillExecutionReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.KillExecutionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.KillExecutionReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.KillExecutionReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.killExecution =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/KillExecution',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_KillExecution,
      callback);
};


/**
 * @param {!proto.ecos_app.KillExecutionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.KillExecutionReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.killExecution =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/KillExecution',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_KillExecution);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.GetExecutionRequest,
 *   !proto.ecos_app.GetExecutionReply>}
 */
const methodDescriptor_ECOS_APP_GetExecution = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/GetExecution',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.GetExecutionRequest,
  proto.ecos_app.GetExecutionReply,
  /**
   * @param {!proto.ecos_app.GetExecutionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.GetExecutionReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.GetExecutionRequest,
 *   !proto.ecos_app.GetExecutionReply>}
 */
const methodInfo_ECOS_APP_GetExecution = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.GetExecutionReply,
  /**
   * @param {!proto.ecos_app.GetExecutionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.GetExecutionReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.GetExecutionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.GetExecutionReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.GetExecutionReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.getExecution =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/GetExecution',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_GetExecution,
      callback);
};


/**
 * @param {!proto.ecos_app.GetExecutionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.GetExecutionReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.getExecution =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/GetExecution',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_GetExecution);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.ListExecutionRequest,
 *   !proto.ecos_app.ListExecutionReply>}
 */
const methodDescriptor_ECOS_APP_ListExecution = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/ListExecution',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.ListExecutionRequest,
  proto.ecos_app.ListExecutionReply,
  /**
   * @param {!proto.ecos_app.ListExecutionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.ListExecutionReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.ListExecutionRequest,
 *   !proto.ecos_app.ListExecutionReply>}
 */
const methodInfo_ECOS_APP_ListExecution = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.ListExecutionReply,
  /**
   * @param {!proto.ecos_app.ListExecutionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.ListExecutionReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.ListExecutionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.ListExecutionReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.ListExecutionReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.listExecution =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/ListExecution',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_ListExecution,
      callback);
};


/**
 * @param {!proto.ecos_app.ListExecutionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.ListExecutionReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.listExecution =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/ListExecution',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_ListExecution);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.SuspendTaskRequest,
 *   !proto.ecos_app.SuspendTaskReply>}
 */
const methodDescriptor_ECOS_APP_SuspendTask = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/SuspendTask',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.SuspendTaskRequest,
  proto.ecos_app.SuspendTaskReply,
  /**
   * @param {!proto.ecos_app.SuspendTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.SuspendTaskReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.SuspendTaskRequest,
 *   !proto.ecos_app.SuspendTaskReply>}
 */
const methodInfo_ECOS_APP_SuspendTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.SuspendTaskReply,
  /**
   * @param {!proto.ecos_app.SuspendTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.SuspendTaskReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.SuspendTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.SuspendTaskReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.SuspendTaskReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.suspendTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/SuspendTask',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_SuspendTask,
      callback);
};


/**
 * @param {!proto.ecos_app.SuspendTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.SuspendTaskReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.suspendTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/SuspendTask',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_SuspendTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.ResumeTaskRequest,
 *   !proto.ecos_app.ResumeTaskReply>}
 */
const methodDescriptor_ECOS_APP_ResumeTask = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/ResumeTask',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.ResumeTaskRequest,
  proto.ecos_app.ResumeTaskReply,
  /**
   * @param {!proto.ecos_app.ResumeTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.ResumeTaskReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.ResumeTaskRequest,
 *   !proto.ecos_app.ResumeTaskReply>}
 */
const methodInfo_ECOS_APP_ResumeTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.ResumeTaskReply,
  /**
   * @param {!proto.ecos_app.ResumeTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.ResumeTaskReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.ResumeTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.ResumeTaskReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.ResumeTaskReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.resumeTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/ResumeTask',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_ResumeTask,
      callback);
};


/**
 * @param {!proto.ecos_app.ResumeTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.ResumeTaskReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.resumeTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/ResumeTask',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_ResumeTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.RetryTaskRequest,
 *   !proto.ecos_app.RetryTaskReply>}
 */
const methodDescriptor_ECOS_APP_RetryTask = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/RetryTask',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.RetryTaskRequest,
  proto.ecos_app.RetryTaskReply,
  /**
   * @param {!proto.ecos_app.RetryTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.RetryTaskReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.RetryTaskRequest,
 *   !proto.ecos_app.RetryTaskReply>}
 */
const methodInfo_ECOS_APP_RetryTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.RetryTaskReply,
  /**
   * @param {!proto.ecos_app.RetryTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.RetryTaskReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.RetryTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.RetryTaskReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.RetryTaskReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.retryTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/RetryTask',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_RetryTask,
      callback);
};


/**
 * @param {!proto.ecos_app.RetryTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.RetryTaskReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.retryTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/RetryTask',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_RetryTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.UpdateTriggerRequest,
 *   !proto.ecos_app.UpdateTriggerReply>}
 */
const methodDescriptor_ECOS_APP_UpdateTrigger = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/UpdateTrigger',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.UpdateTriggerRequest,
  proto.ecos_app.UpdateTriggerReply,
  /**
   * @param {!proto.ecos_app.UpdateTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.UpdateTriggerReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.UpdateTriggerRequest,
 *   !proto.ecos_app.UpdateTriggerReply>}
 */
const methodInfo_ECOS_APP_UpdateTrigger = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.UpdateTriggerReply,
  /**
   * @param {!proto.ecos_app.UpdateTriggerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.UpdateTriggerReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.UpdateTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.UpdateTriggerReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.UpdateTriggerReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.updateTrigger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/UpdateTrigger',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_UpdateTrigger,
      callback);
};


/**
 * @param {!proto.ecos_app.UpdateTriggerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.UpdateTriggerReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.updateTrigger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/UpdateTrigger',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_UpdateTrigger);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.ValidateCronRequest,
 *   !proto.ecos_app.ValidateCronReply>}
 */
const methodDescriptor_ECOS_APP_ValidateCron = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/ValidateCron',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.ValidateCronRequest,
  proto.ecos_app.ValidateCronReply,
  /**
   * @param {!proto.ecos_app.ValidateCronRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.ValidateCronReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.ValidateCronRequest,
 *   !proto.ecos_app.ValidateCronReply>}
 */
const methodInfo_ECOS_APP_ValidateCron = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.ValidateCronReply,
  /**
   * @param {!proto.ecos_app.ValidateCronRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.ValidateCronReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.ValidateCronRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.ValidateCronReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.ValidateCronReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.validateCron =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/ValidateCron',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_ValidateCron,
      callback);
};


/**
 * @param {!proto.ecos_app.ValidateCronRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.ValidateCronReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.validateCron =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/ValidateCron',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_ValidateCron);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.ListTopicRequest,
 *   !proto.ecos_app.ListTopicReply>}
 */
const methodDescriptor_ECOS_APP_ListTopic = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/ListTopic',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.ListTopicRequest,
  proto.ecos_app.ListTopicReply,
  /**
   * @param {!proto.ecos_app.ListTopicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.ListTopicReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.ListTopicRequest,
 *   !proto.ecos_app.ListTopicReply>}
 */
const methodInfo_ECOS_APP_ListTopic = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.ListTopicReply,
  /**
   * @param {!proto.ecos_app.ListTopicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.ListTopicReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.ListTopicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.ListTopicReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.ListTopicReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.listTopic =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/ListTopic',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_ListTopic,
      callback);
};


/**
 * @param {!proto.ecos_app.ListTopicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.ListTopicReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.listTopic =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/ListTopic',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_ListTopic);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.ListQueueRequest,
 *   !proto.ecos_app.ListQueueReply>}
 */
const methodDescriptor_ECOS_APP_ListQueue = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/ListQueue',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.ListQueueRequest,
  proto.ecos_app.ListQueueReply,
  /**
   * @param {!proto.ecos_app.ListQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.ListQueueReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.ListQueueRequest,
 *   !proto.ecos_app.ListQueueReply>}
 */
const methodInfo_ECOS_APP_ListQueue = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.ListQueueReply,
  /**
   * @param {!proto.ecos_app.ListQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.ListQueueReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.ListQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.ListQueueReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.ListQueueReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.listQueue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/ListQueue',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_ListQueue,
      callback);
};


/**
 * @param {!proto.ecos_app.ListQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.ListQueueReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.listQueue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/ListQueue',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_ListQueue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.GetInputRequest,
 *   !proto.ecos_app.GetInputReply>}
 */
const methodDescriptor_ECOS_APP_GetInput = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/GetInput',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.GetInputRequest,
  proto.ecos_app.GetInputReply,
  /**
   * @param {!proto.ecos_app.GetInputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.GetInputReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.GetInputRequest,
 *   !proto.ecos_app.GetInputReply>}
 */
const methodInfo_ECOS_APP_GetInput = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.GetInputReply,
  /**
   * @param {!proto.ecos_app.GetInputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.GetInputReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.GetInputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.GetInputReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.GetInputReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.getInput =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/GetInput',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_GetInput,
      callback);
};


/**
 * @param {!proto.ecos_app.GetInputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.GetInputReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.getInput =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/GetInput',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_GetInput);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.WriteOutputRequest,
 *   !proto.ecos_app.WriteOutputReply>}
 */
const methodDescriptor_ECOS_APP_WriteOutput = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/WriteOutput',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.WriteOutputRequest,
  proto.ecos_app.WriteOutputReply,
  /**
   * @param {!proto.ecos_app.WriteOutputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.WriteOutputReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.WriteOutputRequest,
 *   !proto.ecos_app.WriteOutputReply>}
 */
const methodInfo_ECOS_APP_WriteOutput = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.WriteOutputReply,
  /**
   * @param {!proto.ecos_app.WriteOutputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.WriteOutputReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.WriteOutputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.WriteOutputReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.WriteOutputReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.writeOutput =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/WriteOutput',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_WriteOutput,
      callback);
};


/**
 * @param {!proto.ecos_app.WriteOutputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.WriteOutputReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.writeOutput =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/WriteOutput',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_WriteOutput);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.IsAdminRequest,
 *   !proto.ecos_app.IsAdminReply>}
 */
const methodDescriptor_ECOS_APP_IsAdmin = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/IsAdmin',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.IsAdminRequest,
  proto.ecos_app.IsAdminReply,
  /**
   * @param {!proto.ecos_app.IsAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.IsAdminReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.IsAdminRequest,
 *   !proto.ecos_app.IsAdminReply>}
 */
const methodInfo_ECOS_APP_IsAdmin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.IsAdminReply,
  /**
   * @param {!proto.ecos_app.IsAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.IsAdminReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.IsAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.IsAdminReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.IsAdminReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.isAdmin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/IsAdmin',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_IsAdmin,
      callback);
};


/**
 * @param {!proto.ecos_app.IsAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.IsAdminReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.isAdmin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/IsAdmin',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_IsAdmin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.FavoriteRequest,
 *   !proto.ecos_app.FavoriteReply>}
 */
const methodDescriptor_ECOS_APP_Favorite = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/Favorite',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.FavoriteRequest,
  proto.ecos_app.FavoriteReply,
  /**
   * @param {!proto.ecos_app.FavoriteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.FavoriteReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.FavoriteRequest,
 *   !proto.ecos_app.FavoriteReply>}
 */
const methodInfo_ECOS_APP_Favorite = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.FavoriteReply,
  /**
   * @param {!proto.ecos_app.FavoriteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.FavoriteReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.FavoriteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.FavoriteReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.FavoriteReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.favorite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/Favorite',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_Favorite,
      callback);
};


/**
 * @param {!proto.ecos_app.FavoriteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.FavoriteReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.favorite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/Favorite',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_Favorite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.UnFavoriteRequest,
 *   !proto.ecos_app.UnFavoriteReply>}
 */
const methodDescriptor_ECOS_APP_UnFavorite = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/UnFavorite',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.UnFavoriteRequest,
  proto.ecos_app.UnFavoriteReply,
  /**
   * @param {!proto.ecos_app.UnFavoriteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.UnFavoriteReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.UnFavoriteRequest,
 *   !proto.ecos_app.UnFavoriteReply>}
 */
const methodInfo_ECOS_APP_UnFavorite = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.UnFavoriteReply,
  /**
   * @param {!proto.ecos_app.UnFavoriteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.UnFavoriteReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.UnFavoriteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.UnFavoriteReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.UnFavoriteReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.unFavorite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/UnFavorite',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_UnFavorite,
      callback);
};


/**
 * @param {!proto.ecos_app.UnFavoriteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.UnFavoriteReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.unFavorite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/UnFavorite',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_UnFavorite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.EmailUnsubscribeRequest,
 *   !proto.ecos_app.EmailUnsubscribeReply>}
 */
const methodDescriptor_ECOS_APP_EmailUnsubscribe = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/EmailUnsubscribe',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.EmailUnsubscribeRequest,
  proto.ecos_app.EmailUnsubscribeReply,
  /**
   * @param {!proto.ecos_app.EmailUnsubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.EmailUnsubscribeReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.EmailUnsubscribeRequest,
 *   !proto.ecos_app.EmailUnsubscribeReply>}
 */
const methodInfo_ECOS_APP_EmailUnsubscribe = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.EmailUnsubscribeReply,
  /**
   * @param {!proto.ecos_app.EmailUnsubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.EmailUnsubscribeReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.EmailUnsubscribeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.EmailUnsubscribeReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.EmailUnsubscribeReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.emailUnsubscribe =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/EmailUnsubscribe',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_EmailUnsubscribe,
      callback);
};


/**
 * @param {!proto.ecos_app.EmailUnsubscribeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.EmailUnsubscribeReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.emailUnsubscribe =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/EmailUnsubscribe',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_EmailUnsubscribe);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.GetUnSubscribeRequest,
 *   !proto.ecos_app.GetUnSubscribeReply>}
 */
const methodDescriptor_ECOS_APP_GetUnSubscribe = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/GetUnSubscribe',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.GetUnSubscribeRequest,
  proto.ecos_app.GetUnSubscribeReply,
  /**
   * @param {!proto.ecos_app.GetUnSubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.GetUnSubscribeReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.GetUnSubscribeRequest,
 *   !proto.ecos_app.GetUnSubscribeReply>}
 */
const methodInfo_ECOS_APP_GetUnSubscribe = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.GetUnSubscribeReply,
  /**
   * @param {!proto.ecos_app.GetUnSubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.GetUnSubscribeReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.GetUnSubscribeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.GetUnSubscribeReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.GetUnSubscribeReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.getUnSubscribe =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/GetUnSubscribe',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_GetUnSubscribe,
      callback);
};


/**
 * @param {!proto.ecos_app.GetUnSubscribeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.GetUnSubscribeReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.getUnSubscribe =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/GetUnSubscribe',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_GetUnSubscribe);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecos_app.EmailReSubscribeRequest,
 *   !proto.ecos_app.EmailReSubscribeReply>}
 */
const methodDescriptor_ECOS_APP_EmailReSubscribe = new grpc.web.MethodDescriptor(
  '/ecos_app.ECOS_APP/EmailReSubscribe',
  grpc.web.MethodType.UNARY,
  proto.ecos_app.EmailReSubscribeRequest,
  proto.ecos_app.EmailReSubscribeReply,
  /**
   * @param {!proto.ecos_app.EmailReSubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.EmailReSubscribeReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecos_app.EmailReSubscribeRequest,
 *   !proto.ecos_app.EmailReSubscribeReply>}
 */
const methodInfo_ECOS_APP_EmailReSubscribe = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecos_app.EmailReSubscribeReply,
  /**
   * @param {!proto.ecos_app.EmailReSubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecos_app.EmailReSubscribeReply.deserializeBinary
);


/**
 * @param {!proto.ecos_app.EmailReSubscribeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecos_app.EmailReSubscribeReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecos_app.EmailReSubscribeReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecos_app.ECOS_APPClient.prototype.emailReSubscribe =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecos_app.ECOS_APP/EmailReSubscribe',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_EmailReSubscribe,
      callback);
};


/**
 * @param {!proto.ecos_app.EmailReSubscribeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecos_app.EmailReSubscribeReply>}
 *     Promise that resolves to the response
 */
proto.ecos_app.ECOS_APPPromiseClient.prototype.emailReSubscribe =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecos_app.ECOS_APP/EmailReSubscribe',
      request,
      metadata || {},
      methodDescriptor_ECOS_APP_EmailReSubscribe);
};


module.exports = proto.ecos_app;


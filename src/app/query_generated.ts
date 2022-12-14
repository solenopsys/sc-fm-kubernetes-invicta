// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

/**
 * @enum {number}
 */
export namespace kube {
  export enum HttpType {
    Get = 1,
    Post = 2
  }
}
;

/**
 * @constructor
 */
export namespace kube {
  export class Query {
    bb: flatbuffers.ByteBuffer | null = null;

    bb_pos: number = 0;

    /**
     * @param number i
     * @param flatbuffers.ByteBuffer bb
     * @returns Query
     */
    __init(i: number, bb: flatbuffers.ByteBuffer): Query {
      this.bb_pos = i;
      this.bb = bb;
      return this;
    };

    /**
     * @param flatbuffers.ByteBuffer bb
     * @param Query= obj
     * @returns Query
     */
    static getRootAsQuery(bb: flatbuffers.ByteBuffer, obj?: Query): Query {
      return (obj || new Query).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };

    /**
     * @returns kube.HttpType
     */
    httpType(): kube.HttpType {
      var offset = this.bb!.__offset(this.bb_pos, 4);
      return offset ? /**  */ (this.bb!.readInt8(this.bb_pos + offset)) : kube.HttpType.Get;
    };

    /**
     * @param flatbuffers.Encoding= optionalEncoding
     * @returns string|Uint8Array|null
     */
    uri(): string | null
    uri(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null
    uri(optionalEncoding?: any): string | Uint8Array | null {
      var offset = this.bb!.__offset(this.bb_pos, 6);
      return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
    };

    /**
     * @param flatbuffers.Encoding= optionalEncoding
     * @returns string|Uint8Array|null
     */
    query(): string | null
    query(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null
    query(optionalEncoding?: any): string | Uint8Array | null {
      var offset = this.bb!.__offset(this.bb_pos, 8);
      return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
    };

    /**
     * @param flatbuffers.Builder builder
     */
    static startQuery(builder: flatbuffers.Builder) {
      builder.startObject(3);
    };

    /**
     * @param flatbuffers.Builder builder
     * @param kube.HttpType httpType
     */
    static addHttpType(builder: flatbuffers.Builder, httpType: kube.HttpType) {
      builder.addFieldInt8(0, httpType, kube.HttpType.Get);
    };

    /**
     * @param flatbuffers.Builder builder
     * @param flatbuffers.Offset uriOffset
     */
    static addUri(builder: flatbuffers.Builder, uriOffset: flatbuffers.Offset) {
      builder.addFieldOffset(1, uriOffset, 0);
    };

    /**
     * @param flatbuffers.Builder builder
     * @param flatbuffers.Offset queryOffset
     */
    static addQuery(builder: flatbuffers.Builder, queryOffset: flatbuffers.Offset) {
      builder.addFieldOffset(2, queryOffset, 0);
    };

    /**
     * @param flatbuffers.Builder builder
     * @returns flatbuffers.Offset
     */
    static endQuery(builder: flatbuffers.Builder): flatbuffers.Offset {
      var offset = builder.endObject();
      return offset;
    };

    static createQuery(builder: flatbuffers.Builder, httpType: kube.HttpType, uriOffset: flatbuffers.Offset, queryOffset: flatbuffers.Offset): flatbuffers.Offset {
      Query.startQuery(builder);
      Query.addHttpType(builder, httpType);
      Query.addUri(builder, uriOffset);
      Query.addQuery(builder, queryOffset);
      return Query.endQuery(builder);
    }
  }
}

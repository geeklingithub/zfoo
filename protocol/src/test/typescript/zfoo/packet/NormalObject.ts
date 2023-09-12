import ObjectA from './ObjectA';

// @author godotg
class NormalObject {

    a: number = 0;
    aaa: Array<number> | null = null;
    b: number = 0;
    c: number = 0;
    d: number = 0;
    e: number = 0;
    f: number = 0;
    g: boolean = false;
    jj: string = '';
    kk: ObjectA | null = null;
    l: Array<number> | null = null;
    ll: Array<number> | null = null;
    lll: Array<ObjectA> | null = null;
    llll: Array<string> | null = null;
    m: Map<number, string> | null = null;
    mm: Map<number, ObjectA> | null = null;
    s: Set<number> | null = null;
    ssss: Set<string> | null = null;

    protocolId(): number {
        return 101;
    }

    static write(buffer: any, packet: NormalObject | null) {
        if (buffer.writePacketFlag(packet)) {
            return;
        }
        if (packet === null) {
            return;
        }

        buffer.writeByte(packet.a);
        buffer.writeByteArray(packet.aaa);
        buffer.writeShort(packet.b);
        buffer.writeInt(packet.c);
        buffer.writeLong(packet.d);
        buffer.writeFloat(packet.e);
        buffer.writeDouble(packet.f);
        buffer.writeBoolean(packet.g);
        buffer.writeString(packet.jj);
        buffer.writePacket(packet.kk, 102);
        buffer.writeIntList(packet.l);
        buffer.writeLongList(packet.ll);
        buffer.writePacketList(packet.lll, 102);
        buffer.writeStringList(packet.llll);
        buffer.writeIntStringMap(packet.m);
        buffer.writeIntPacketMap(packet.mm, 102);
        buffer.writeIntSet(packet.s);
        buffer.writeStringSet(packet.ssss);
    }

    static read(buffer: any): NormalObject | null {
        if (!buffer.readBoolean()) {
            return null;
        }
        const packet = new NormalObject();
        const result0 = buffer.readByte();
        packet.a = result0;
        const array1 = buffer.readByteArray();
        packet.aaa = array1;
        const result2 = buffer.readShort();
        packet.b = result2;
        const result3 = buffer.readInt();
        packet.c = result3;
        const result4 = buffer.readLong();
        packet.d = result4;
        const result5 = buffer.readFloat();
        packet.e = result5;
        const result6 = buffer.readDouble();
        packet.f = result6;
        const result7 = buffer.readBoolean(); 
        packet.g = result7;
        const result8 = buffer.readString();
        packet.jj = result8;
        const result9 = buffer.readPacket(102);
        packet.kk = result9;
        const list10 = buffer.readIntList();
        packet.l = list10;
        const list11 = buffer.readLongList();
        packet.ll = list11;
        const list12 = buffer.readPacketList(102);
        packet.lll = list12;
        const list13 = buffer.readStringList();
        packet.llll = list13;
        const map14 = buffer.readIntStringMap();
        packet.m = map14;
        const map15 = buffer.readIntPacketMap(102);
        packet.mm = map15;
        const set16 = buffer.readIntSet();
        packet.s = set16;
        const set17 = buffer.readStringSet();
        packet.ssss = set17;
        return packet;
    }
}

export default NormalObject;

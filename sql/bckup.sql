PGDMP                         w            indig_v1    10.10    11.5     �
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �
           1262    24986    indig_v1    DATABASE     �   CREATE DATABASE indig_v1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE indig_v1;
             postgres    false            �            1259    24993    relation_nodes    TABLE     (   CREATE TABLE public.relation_nodes (
);
 "   DROP TABLE public.relation_nodes;
       public         postgres    false            �            1259    25020 	   skill_sub    TABLE     l   CREATE TABLE public.skill_sub (
    name character varying(64),
    super character varying(64) NOT NULL
);
    DROP TABLE public.skill_sub;
       public         postgres    false            �            1259    24987    skill_super    TABLE     D   CREATE TABLE public.skill_super (
    name character varying(64)
);
    DROP TABLE public.skill_super;
       public         postgres    false            �            1259    24996    user    TABLE     �   CREATE TABLE public."user" (
    name_last character varying(64) NOT NULL,
    name_first character varying(64) NOT NULL,
    name_middle character varying(64),
    email character varying(64),
    active boolean,
    username character varying(64)
);
    DROP TABLE public."user";
       public         postgres    false            �            1259    24999 	   user_meta    TABLE     #   CREATE TABLE public.user_meta (
);
    DROP TABLE public.user_meta;
       public         postgres    false            �
          0    24993    relation_nodes 
   TABLE DATA               (   COPY public.relation_nodes  FROM stdin;
    public       postgres    false    197   �       �
          0    25020 	   skill_sub 
   TABLE DATA               0   COPY public.skill_sub (name, super) FROM stdin;
    public       postgres    false    200          �
          0    24987    skill_super 
   TABLE DATA               +   COPY public.skill_super (name) FROM stdin;
    public       postgres    false    196   W       �
          0    24996    user 
   TABLE DATA               ]   COPY public."user" (name_last, name_first, name_middle, email, active, username) FROM stdin;
    public       postgres    false    198   �       �
          0    24999 	   user_meta 
   TABLE DATA               #   COPY public.user_meta  FROM stdin;
    public       postgres    false    199   �       �
      x������ � �      �
   0  x��UͶ�6^_?�V��f����$`�E�����$QI��}���{�ps���ͯff��аR��ڧ�):���~��P6������9��.�Q���T-{�d�и8Vɱ��j���1���+��k!�h�j�6O���6;aK��Z�.j�q�a��LB��bQ�E�� ,��RC������I�X8�w*j.�-��J����B�����;����h*�d(_3^��=f�� -�vҰ��)��e�U+����oF�QRY�z3�Y�64+#3�`�w�]��^����!�9Ɋ2�{6���y��pq(1�	=��Ǐ��y �E&@U�� X�o>�����G���;ܾFx	Z���e����,o��by������^o�$P���7|������[<K�VM�)�qZf	?��f鞏�i��ͧ�.x�)�^�i�X���?3�O���>�R�o�n�O�J馇R�� <,Gcȩ�1��Q4p,�������
`�	ճ���,�T��FՇ�9��A���s��8ʘ�#����PÃ���B��XS�1�"ö[�,;e�w5i*��ڧ���b`7�\}X�:Y�ӭm�֠�#�i�`g�I���ft8�m�>�`ƹS>N��ي�Y��aK�T�\�0�yt��T�$=}��d\l�w��ܴ�5�f�	{�qy+t{Ou�y�R�K�Ϲ�r�j��%|:&�Kq�2gq*�'�r�ի}��<�_��I�����jM�6 o��qe,OviD���ip����+�J���A)k�C��Z!�#��>�ʪC`��9]R��_6��?>���      �
   i   x����0���$50�F&�C����H��0�}M���2
Q$\��`i����~]M�a�:'G��rz��s�YI�;p��:�'�q�ʦl�C��� �\e �      �
      x������ � �      �
      x������ � �     